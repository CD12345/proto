using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CppArrayExporter.Debugger;
using CppArrayExporter.Persistence;
using Microsoft.VisualStudio.Shell;
using Task = System.Threading.Tasks.Task;

namespace CppArrayExporter.Export
{
    /// <summary>
    /// Manages export operations for array variables
    /// </summary>
    public class ExportManager
    {
        private static ExportManager _instance;
        private readonly Dictionary<string, IExportAction> _exportActions;
        private readonly Dictionary<string, ExportSettings> _activeSettings;
        private readonly ExportDefinitionRepository _repository;
        private AsyncPackage _package;

        public static ExportManager Instance => _instance ?? (_instance = new ExportManager());

        private ExportManager()
        {
            _exportActions = new Dictionary<string, IExportAction>();
            _activeSettings = new Dictionary<string, ExportSettings>();
            _repository = new ExportDefinitionRepository();

            // Register built-in export actions
            RegisterExportAction(new JsonCommandLineExportAction());
        }

        public async Task InitializeAsync(AsyncPackage package)
        {
            _package = package;

            // Subscribe to debug events
            DebuggerService.Instance.DebugSessionStarted += OnDebugSessionStarted;
            DebuggerService.Instance.DebugSessionEnded += OnDebugSessionEnded;

            await Task.CompletedTask;
        }

        public void RegisterExportAction(IExportAction action)
        {
            _exportActions[action.TypeId] = action;
        }

        public IEnumerable<IExportAction> GetAvailableExportActions()
        {
            return _exportActions.Values;
        }

        public IExportAction GetExportAction(string typeId)
        {
            _exportActions.TryGetValue(typeId, out var action);
            return action;
        }

        /// <summary>
        /// Get export settings for a variable, or null if not configured
        /// </summary>
        public ExportSettings GetExportSettings(string filePath, int lineNumber, string variableName)
        {
            var key = GetSettingsKey(filePath, lineNumber, variableName);
            _activeSettings.TryGetValue(key, out var settings);
            return settings;
        }

        /// <summary>
        /// Save export settings for a variable
        /// </summary>
        public async Task SaveExportSettingsAsync(string filePath, int lineNumber, ExportSettings settings)
        {
            var key = GetSettingsKey(filePath, lineNumber, settings.VariableName);
            _activeSettings[key] = settings;

            // Persist to disk
            var definition = new ExportDefinition
            {
                VariableName = settings.VariableName,
                LengthExpression = settings.LengthExpression,
                ExportActionType = settings.ExportAction?.TypeId,
                Settings = new Dictionary<string, string>(settings.ActionSettings),
                FilePath = filePath,
                LineNumber = lineNumber
            };

            await _repository.SaveDefinitionAsync(filePath, definition);
        }

        /// <summary>
        /// Export an array variable
        /// </summary>
        public async Task ExportArrayAsync(ArrayVariableInfo arrayInfo, ExportSettings settings)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            if (!DebuggerService.Instance.IsDebugging)
            {
                throw new InvalidOperationException("Cannot export array: debugger is not active");
            }

            // Evaluate length expression
            var length = DebuggerService.Instance.EvaluateLengthExpression(settings.LengthExpression);
            if (!length.HasValue || length.Value <= 0)
            {
                throw new InvalidOperationException($"Invalid length expression: {settings.LengthExpression}");
            }

            // Read array data from debugger
            var data = DebuggerService.Instance.ReadArrayData(arrayInfo.Name, length.Value, arrayInfo.Type);
            if (data == null || data.Length == 0)
            {
                throw new InvalidOperationException($"Failed to read array data for {arrayInfo.Name}");
            }

            // Prepare settings with source directory placeholder
            var actionSettings = new Dictionary<string, string>(settings.ActionSettings);
            var sourceDir = Path.GetDirectoryName(arrayInfo.FilePath);
            foreach (var key in actionSettings.Keys.ToList())
            {
                actionSettings[key] = actionSettings[key].Replace("{SourceDirectory}", sourceDir);
            }

            // Execute export action
            await settings.ExportAction.ExecuteAsync(
                arrayInfo.Name,
                arrayInfo.Type,
                data,
                length.Value,
                actionSettings
            );
        }

        private void OnDebugSessionStarted(object sender, EventArgs e)
        {
            ThreadHelper.JoinableTaskFactory.RunAsync(async () =>
            {
                await LoadExportDefinitionsAsync();
            }).FireAndForget();
        }

        private void OnDebugSessionEnded(object sender, EventArgs e)
        {
            // Clear active settings on debug session end
            _activeSettings.Clear();
        }

        private async Task LoadExportDefinitionsAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            // Load definitions from all source files in the current solution
            // For now, we'll load them on-demand when a file is opened
            // This is called when debug session starts

            _activeSettings.Clear();

            // We'll load definitions on-demand when files are accessed
            await Task.CompletedTask;
        }

        /// <summary>
        /// Load export definitions for a specific file
        /// </summary>
        public async Task LoadExportDefinitionsForFileAsync(string filePath)
        {
            var definitions = await _repository.LoadDefinitionsAsync(filePath);

            foreach (var definition in definitions)
            {
                var exportAction = GetExportAction(definition.ExportActionType);
                if (exportAction == null)
                    continue;

                var settings = new ExportSettings
                {
                    VariableName = definition.VariableName,
                    LengthExpression = definition.LengthExpression,
                    ExportAction = exportAction,
                    ActionSettings = new Dictionary<string, string>(definition.Settings)
                };

                var key = GetSettingsKey(definition.FilePath, definition.LineNumber, definition.VariableName);
                _activeSettings[key] = settings;
            }
        }

        private string GetSettingsKey(string filePath, int lineNumber, string variableName)
        {
            return $"{filePath}:{lineNumber}:{variableName}".ToLowerInvariant();
        }
    }
}
