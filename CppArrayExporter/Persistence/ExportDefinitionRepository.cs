using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CppArrayExporter.Export;
using Newtonsoft.Json;

namespace CppArrayExporter.Persistence
{
    /// <summary>
    /// Repository for saving and loading export definitions
    /// </summary>
    public class ExportDefinitionRepository
    {
        private const string DefinitionFileName = ".cpp-array-exports.json";

        /// <summary>
        /// Load export definitions for a source file
        /// </summary>
        public async Task<List<ExportDefinition>> LoadDefinitionsAsync(string sourceFilePath)
        {
            try
            {
                var definitionFilePath = GetDefinitionFilePath(sourceFilePath);
                if (!File.Exists(definitionFilePath))
                    return new List<ExportDefinition>();

                var json = await File.ReadAllTextAsync(definitionFilePath);
                var file = JsonConvert.DeserializeObject<ExportDefinitionFile>(json);

                if (file?.Definitions == null)
                    return new List<ExportDefinition>();

                // Filter definitions for this specific source file
                return file.Definitions
                    .Where(d => string.Equals(Path.GetFileName(d.FilePath), Path.GetFileName(sourceFilePath), StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error loading export definitions: {ex.Message}");
                return new List<ExportDefinition>();
            }
        }

        /// <summary>
        /// Save an export definition for a source file
        /// </summary>
        public async Task SaveDefinitionAsync(string sourceFilePath, ExportDefinition definition)
        {
            try
            {
                var definitionFilePath = GetDefinitionFilePath(sourceFilePath);
                var directory = Path.GetDirectoryName(definitionFilePath);

                // Ensure directory exists
                if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                // Load existing definitions
                ExportDefinitionFile file;
                if (File.Exists(definitionFilePath))
                {
                    var json = await File.ReadAllTextAsync(definitionFilePath);
                    file = JsonConvert.DeserializeObject<ExportDefinitionFile>(json) ?? new ExportDefinitionFile();
                }
                else
                {
                    file = new ExportDefinitionFile();
                }

                // Remove any existing definition for the same variable at the same location
                file.Definitions.RemoveAll(d =>
                    string.Equals(d.FilePath, definition.FilePath, StringComparison.OrdinalIgnoreCase) &&
                    d.LineNumber == definition.LineNumber &&
                    string.Equals(d.VariableName, definition.VariableName, StringComparison.OrdinalIgnoreCase));

                // Add new definition
                file.Definitions.Add(definition);

                // Save to disk
                var newJson = JsonConvert.SerializeObject(file, Formatting.Indented);
                await File.WriteAllTextAsync(definitionFilePath, newJson);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error saving export definition: {ex.Message}");
                throw;
            }
        }

        /// <summary>
        /// Delete an export definition
        /// </summary>
        public async Task DeleteDefinitionAsync(string sourceFilePath, int lineNumber, string variableName)
        {
            try
            {
                var definitionFilePath = GetDefinitionFilePath(sourceFilePath);
                if (!File.Exists(definitionFilePath))
                    return;

                var json = await File.ReadAllTextAsync(definitionFilePath);
                var file = JsonConvert.DeserializeObject<ExportDefinitionFile>(json);

                if (file?.Definitions == null)
                    return;

                // Remove definition
                file.Definitions.RemoveAll(d =>
                    string.Equals(d.FilePath, sourceFilePath, StringComparison.OrdinalIgnoreCase) &&
                    d.LineNumber == lineNumber &&
                    string.Equals(d.VariableName, variableName, StringComparison.OrdinalIgnoreCase));

                // Save back
                var newJson = JsonConvert.SerializeObject(file, Formatting.Indented);
                await File.WriteAllTextAsync(definitionFilePath, newJson);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Error deleting export definition: {ex.Message}");
            }
        }

        private string GetDefinitionFilePath(string sourceFilePath)
        {
            var directory = Path.GetDirectoryName(sourceFilePath);
            return Path.Combine(directory, DefinitionFileName);
        }
    }
}
