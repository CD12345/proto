using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Debugger.Interop;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;

namespace CppArrayExporter.Debugger
{
    /// <summary>
    /// Service for interacting with the Visual Studio debugger
    /// </summary>
    public class DebuggerService : IDisposable
    {
        private static DebuggerService _instance;
        private IVsDebugger _debugger;
        private AsyncPackage _package;
        private uint _debugEventsCookie;

        public static DebuggerService Instance => _instance ?? (_instance = new DebuggerService());

        public event EventHandler DebugSessionStarted;
        public event EventHandler DebugSessionEnded;

        private DebuggerService() { }

        public void Initialize(AsyncPackage package)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            _package = package;
            _debugger = (IVsDebugger)Package.GetGlobalService(typeof(SVsShellDebugger));

            // Subscribe to debug events
            var debugEventHandler = new DebugEventHandler(this);
            _debugger?.AdviseDebugEventCallback(debugEventHandler);
        }

        public bool IsDebugging
        {
            get
            {
                ThreadHelper.ThrowIfNotOnUIThread();
                if (_debugger == null)
                    return false;

                var mode = new DBGMODE[1];
                if (_debugger.GetMode(mode) == VSConstants.S_OK)
                {
                    return mode[0] != DBGMODE.DBGMODE_Design;
                }
                return false;
            }
        }

        /// <summary>
        /// Get array variable information at the current debug location
        /// </summary>
        public ArrayVariableInfo GetArrayVariableAtLocation(string filePath, int line, int column, string variableName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            if (!IsDebugging)
                return null;

            try
            {
                // Get current stack frame
                var stackFrame = GetCurrentStackFrame();
                if (stackFrame == null)
                    return null;

                // Get expression context
                IDebugExpressionContext2 expressionContext;
                if (stackFrame.GetExpressionContext(out expressionContext) != VSConstants.S_OK)
                    return null;

                // Parse expression
                IDebugExpression2 expression;
                string error;
                uint errorIndex;
                if (expressionContext.ParseText(variableName, enum_PARSEFLAGS.PARSE_EXPRESSION, 0, out expression, out error, out errorIndex) != VSConstants.S_OK)
                    return null;

                // Evaluate expression
                IDebugProperty2 property;
                if (expression.EvaluateSync(enum_EVALFLAGS.EVAL_NOSIDEEFFECTS, 5000, null, out property) != VSConstants.S_OK)
                    return null;

                // Get property info
                DEBUG_PROPERTY_INFO[] propertyInfo = new DEBUG_PROPERTY_INFO[1];
                if (property.GetPropertyInfo(enum_DEBUGPROP_INFO_FLAGS.DEBUGPROP_INFO_TYPE | enum_DEBUGPROP_INFO_FLAGS.DEBUGPROP_INFO_NAME, 10, 5000, null, 0, propertyInfo) != VSConstants.S_OK)
                    return null;

                var type = propertyInfo[0].bstrType;
                if (string.IsNullOrEmpty(type))
                    return null;

                // Check if it's a supported array type
                if (!type.Contains("float") && !type.Contains("double"))
                    return null;

                if (!type.Contains("*"))
                    return null;

                var arrayInfo = new ArrayVariableInfo
                {
                    Name = variableName,
                    Type = type,
                    FilePath = filePath,
                    Line = line,
                    Column = column,
                    Address = 0 // We'll get this when reading the array
                };

                return arrayInfo;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error getting array variable: {ex.Message}");
                return null;
            }
        }

        /// <summary>
        /// Read array data from debugger
        /// </summary>
        public byte[] ReadArrayData(string variableName, int length, string type)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            if (!IsDebugging)
                return null;

            try
            {
                // Get current stack frame
                var stackFrame = GetCurrentStackFrame();
                if (stackFrame == null)
                    return null;

                // Get expression context
                IDebugExpressionContext2 expressionContext;
                if (stackFrame.GetExpressionContext(out expressionContext) != VSConstants.S_OK)
                    return null;

                // Calculate element size
                int elementSize = type.Contains("double") ? sizeof(double) : sizeof(float);
                int totalBytes = length * elementSize;

                // We need to read the memory through the debugger
                // Create an expression to cast and read the memory
                var readExpression = $"({type}){variableName}";

                IDebugExpression2 expression;
                string error;
                uint errorIndex;
                if (expressionContext.ParseText(readExpression, enum_PARSEFLAGS.PARSE_EXPRESSION, 0, out expression, out error, out errorIndex) != VSConstants.S_OK)
                    return null;

                IDebugProperty2 property;
                if (expression.EvaluateSync(enum_EVALFLAGS.EVAL_NOSIDEEFFECTS, 5000, null, out property) != VSConstants.S_OK)
                    return null;

                // Get memory context
                IDebugMemoryContext2 memoryContext;
                if (property.GetMemoryContext(out memoryContext) != VSConstants.S_OK)
                    return null;

                // Get memory bytes interface
                IDebugMemoryBytes2 memoryBytes;
                if (property.GetMemoryBytes(out memoryBytes) != VSConstants.S_OK)
                    return null;

                // Read memory
                byte[] buffer = new byte[totalBytes];
                uint bytesRead;
                if (memoryBytes.ReadAt(memoryContext, (uint)totalBytes, buffer, out bytesRead, null) != VSConstants.S_OK)
                    return null;

                return buffer;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error reading array data: {ex.Message}");
                return null;
            }
        }

        /// <summary>
        /// Evaluate a length expression in the current debug context
        /// </summary>
        public int? EvaluateLengthExpression(string expression)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            if (!IsDebugging)
                return null;

            try
            {
                // Get current stack frame
                var stackFrame = GetCurrentStackFrame();
                if (stackFrame == null)
                    return null;

                // Get expression context
                IDebugExpressionContext2 expressionContext;
                if (stackFrame.GetExpressionContext(out expressionContext) != VSConstants.S_OK)
                    return null;

                // Parse expression
                IDebugExpression2 debugExpression;
                string error;
                uint errorIndex;
                if (expressionContext.ParseText(expression, enum_PARSEFLAGS.PARSE_EXPRESSION, 0, out debugExpression, out error, out errorIndex) != VSConstants.S_OK)
                    return null;

                // Evaluate expression
                IDebugProperty2 property;
                if (debugExpression.EvaluateSync(enum_EVALFLAGS.EVAL_NOSIDEEFFECTS, 5000, null, out property) != VSConstants.S_OK)
                    return null;

                // Get property value
                DEBUG_PROPERTY_INFO[] propertyInfo = new DEBUG_PROPERTY_INFO[1];
                if (property.GetPropertyInfo(enum_DEBUGPROP_INFO_FLAGS.DEBUGPROP_INFO_VALUE, 10, 5000, null, 0, propertyInfo) != VSConstants.S_OK)
                    return null;

                var valueString = propertyInfo[0].bstrValue;
                if (string.IsNullOrEmpty(valueString))
                    return null;

                // Try to parse as integer
                if (int.TryParse(valueString, out int result))
                    return result;

                return null;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error evaluating length expression: {ex.Message}");
                return null;
            }
        }

        private IDebugStackFrame2 GetCurrentStackFrame()
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            try
            {
                var debugger3 = _debugger as IVsDebugger3;
                if (debugger3 == null)
                    return null;

                // Get current thread
                object currentThread;
                if (debugger3.GetCurrentThread(out currentThread) != VSConstants.S_OK)
                    return null;

                var debugThread = currentThread as IDebugThread2;
                if (debugThread == null)
                    return null;

                // Enum stack frames
                IEnumDebugFrameInfo2 frameEnum;
                if (debugThread.EnumFrameInfo(enum_FRAMEINFO_FLAGS.FIF_FRAME, 10, out frameEnum) != VSConstants.S_OK)
                    return null;

                // Get first frame
                FRAMEINFO[] frames = new FRAMEINFO[1];
                uint fetched;
                if (frameEnum.Next(1, frames, out fetched) != VSConstants.S_OK || fetched == 0)
                    return null;

                return frames[0].m_pFrame as IDebugStackFrame2;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error getting stack frame: {ex.Message}");
                return null;
            }
        }

        internal void OnDebugSessionStarted()
        {
            DebugSessionStarted?.Invoke(this, EventArgs.Empty);
        }

        internal void OnDebugSessionEnded()
        {
            DebugSessionEnded?.Invoke(this, EventArgs.Empty);
        }

        public void Dispose()
        {
            // Cleanup
        }

        private class DebugEventHandler : IVsDebuggerEvents
        {
            private readonly DebuggerService _service;

            public DebugEventHandler(DebuggerService service)
            {
                _service = service;
            }

            public int OnModeChange(DBGMODE dbgmodeNew)
            {
                if (dbgmodeNew == DBGMODE.DBGMODE_Run || dbgmodeNew == DBGMODE.DBGMODE_Break)
                {
                    _service.OnDebugSessionStarted();
                }
                else if (dbgmodeNew == DBGMODE.DBGMODE_Design)
                {
                    _service.OnDebugSessionEnded();
                }
                return VSConstants.S_OK;
            }
        }
    }
}
