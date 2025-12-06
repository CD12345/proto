using System.Collections.Generic;
using Newtonsoft.Json;

namespace CppArrayExporter.Export
{
    /// <summary>
    /// Persisted export definition for a variable
    /// </summary>
    public class ExportDefinition
    {
        [JsonProperty("variableName")]
        public string VariableName { get; set; }

        [JsonProperty("lengthExpression")]
        public string LengthExpression { get; set; }

        [JsonProperty("exportActionType")]
        public string ExportActionType { get; set; }

        [JsonProperty("settings")]
        public Dictionary<string, string> Settings { get; set; } = new Dictionary<string, string>();

        [JsonProperty("filePath")]
        public string FilePath { get; set; }

        [JsonProperty("lineNumber")]
        public int LineNumber { get; set; }
    }

    /// <summary>
    /// Container for multiple export definitions
    /// </summary>
    public class ExportDefinitionFile
    {
        [JsonProperty("version")]
        public string Version { get; set; } = "1.0";

        [JsonProperty("definitions")]
        public List<ExportDefinition> Definitions { get; set; } = new List<ExportDefinition>();
    }
}
