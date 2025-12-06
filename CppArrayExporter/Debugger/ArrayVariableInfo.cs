using System;

namespace CppArrayExporter.Debugger
{
    /// <summary>
    /// Represents information about an array variable in the debugger
    /// </summary>
    public class ArrayVariableInfo
    {
        public string Name { get; set; }
        public string Type { get; set; } // "float*" or "double*"
        public ulong Address { get; set; }
        public string FilePath { get; set; }
        public int Line { get; set; }
        public int Column { get; set; }

        public bool IsFloatPointer => Type?.Contains("float") == true;
        public bool IsDoublePointer => Type?.Contains("double") == true;
        public bool IsSupported => IsFloatPointer || IsDoublePointer;
    }
}
