using System.Collections.Generic;

namespace CppArrayExporter.Export
{
    /// <summary>
    /// Runtime export settings for a variable
    /// </summary>
    public class ExportSettings
    {
        public string VariableName { get; set; }
        public string LengthExpression { get; set; }
        public IExportAction ExportAction { get; set; }
        public Dictionary<string, string> ActionSettings { get; set; } = new Dictionary<string, string>();
    }
}
