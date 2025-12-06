using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace CppArrayExporter.Export
{
    /// <summary>
    /// Export action that converts array to JSON and calls a command line
    /// </summary>
    public class JsonCommandLineExportAction : IExportAction
    {
        public string TypeId => "json-commandline";
        public string DisplayName => "JSON + Command Line";
        public string Description => "Export array as JSON and execute a command line (e.g., Python script for plotting)";

        public IEnumerable<ExportActionSetting> GetSettings()
        {
            return new[]
            {
                new ExportActionSetting
                {
                    Key = "OutputPath",
                    DisplayName = "Output Path",
                    DefaultValue = "{TempPath}\\{VariableName}.json",
                    Description = "Path where JSON file will be saved. Use {TempPath}, {VariableName}, {Timestamp} as placeholders."
                },
                new ExportActionSetting
                {
                    Key = "CommandLine",
                    DisplayName = "Command Line",
                    DefaultValue = "python plot.py \"{FilePath}\"",
                    Description = "Command to execute after export. Use {FilePath} placeholder for the generated JSON file path."
                },
                new ExportActionSetting
                {
                    Key = "WorkingDirectory",
                    DisplayName = "Working Directory",
                    DefaultValue = "{SourceDirectory}",
                    Description = "Working directory for the command. Use {SourceDirectory} for the directory of the source file."
                }
            };
        }

        public async Task ExecuteAsync(string variableName, string arrayType, byte[] data, int length, Dictionary<string, string> settings)
        {
            try
            {
                // Convert byte array to double/float array
                var values = ConvertToArray(arrayType, data, length);

                // Create JSON object
                var jsonObject = new
                {
                    variableName = variableName,
                    type = arrayType,
                    length = length,
                    timestamp = DateTime.UtcNow.ToString("o"),
                    values = values
                };

                var json = JsonConvert.SerializeObject(jsonObject, Formatting.Indented);

                // Get output path with placeholder replacement
                var outputPath = ReplacePlaceholders(
                    settings.GetValueOrDefault("OutputPath", GetSettings().First(s => s.Key == "OutputPath").DefaultValue),
                    variableName,
                    null
                );

                // Ensure directory exists
                var directory = Path.GetDirectoryName(outputPath);
                if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                // Write JSON file
                await File.WriteAllTextAsync(outputPath, json);

                // Execute command line if specified
                var commandLine = settings.GetValueOrDefault("CommandLine", "");
                if (!string.IsNullOrWhiteSpace(commandLine))
                {
                    commandLine = ReplacePlaceholders(commandLine, variableName, outputPath);
                    var workingDir = ReplacePlaceholders(
                        settings.GetValueOrDefault("WorkingDirectory", Path.GetDirectoryName(outputPath)),
                        variableName,
                        outputPath
                    );

                    await ExecuteCommandLineAsync(commandLine, workingDir);
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Failed to export array: {ex.Message}", ex);
            }
        }

        private object[] ConvertToArray(string arrayType, byte[] data, int length)
        {
            if (arrayType.Contains("float"))
            {
                var floats = new float[length];
                Buffer.BlockCopy(data, 0, floats, 0, length * sizeof(float));
                return floats.Cast<object>().ToArray();
            }
            else if (arrayType.Contains("double"))
            {
                var doubles = new double[length];
                Buffer.BlockCopy(data, 0, doubles, 0, length * sizeof(double));
                return doubles.Cast<object>().ToArray();
            }
            else
            {
                throw new ArgumentException($"Unsupported array type: {arrayType}");
            }
        }

        private string ReplacePlaceholders(string input, string variableName, string filePath)
        {
            if (string.IsNullOrEmpty(input))
                return input;

            var result = input;
            result = result.Replace("{VariableName}", variableName);
            result = result.Replace("{TempPath}", Path.GetTempPath().TrimEnd('\\', '/'));
            result = result.Replace("{Timestamp}", DateTime.Now.ToString("yyyyMMdd_HHmmss"));
            result = result.Replace("{FilePath}", filePath ?? "");

            // {SourceDirectory} will be replaced by the caller with actual source directory

            return result;
        }

        private async Task ExecuteCommandLineAsync(string commandLine, string workingDirectory)
        {
            await Task.Run(() =>
            {
                try
                {
                    // Parse command line to extract executable and arguments
                    var parts = ParseCommandLine(commandLine);
                    if (parts.Length == 0)
                        return;

                    var startInfo = new ProcessStartInfo
                    {
                        FileName = parts[0],
                        Arguments = parts.Length > 1 ? string.Join(" ", parts.Skip(1)) : "",
                        WorkingDirectory = workingDirectory,
                        UseShellExecute = false,
                        CreateNoWindow = true,
                        RedirectStandardOutput = true,
                        RedirectStandardError = true
                    };

                    using (var process = Process.Start(startInfo))
                    {
                        if (process != null)
                        {
                            process.WaitForExit(30000); // 30 second timeout
                        }
                    }
                }
                catch (Exception ex)
                {
                    Debug.WriteLine($"Failed to execute command: {ex.Message}");
                }
            });
        }

        private string[] ParseCommandLine(string commandLine)
        {
            var parts = new List<string>();
            var current = "";
            var inQuotes = false;

            for (int i = 0; i < commandLine.Length; i++)
            {
                var c = commandLine[i];

                if (c == '"')
                {
                    inQuotes = !inQuotes;
                }
                else if (c == ' ' && !inQuotes)
                {
                    if (!string.IsNullOrEmpty(current))
                    {
                        parts.Add(current);
                        current = "";
                    }
                }
                else
                {
                    current += c;
                }
            }

            if (!string.IsNullOrEmpty(current))
            {
                parts.Add(current);
            }

            return parts.ToArray();
        }
    }
}
