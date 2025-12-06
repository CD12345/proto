using System.Collections.Generic;
using System.Threading.Tasks;

namespace CppArrayExporter.Export
{
    /// <summary>
    /// Setting definition for export actions
    /// </summary>
    public class ExportActionSetting
    {
        public string Key { get; set; }
        public string DisplayName { get; set; }
        public string DefaultValue { get; set; }
        public string Description { get; set; }
    }

    /// <summary>
    /// Interface for export action implementations
    /// </summary>
    public interface IExportAction
    {
        /// <summary>
        /// Unique identifier for this export action type
        /// </summary>
        string TypeId { get; }

        /// <summary>
        /// Display name for the export action
        /// </summary>
        string DisplayName { get; }

        /// <summary>
        /// Description of what this export action does
        /// </summary>
        string Description { get; }

        /// <summary>
        /// Settings that this export action supports
        /// </summary>
        IEnumerable<ExportActionSetting> GetSettings();

        /// <summary>
        /// Execute the export action
        /// </summary>
        /// <param name="variableName">Name of the variable being exported</param>
        /// <param name="arrayType">Type of array (float or double)</param>
        /// <param name="data">Array data as byte array</param>
        /// <param name="length">Number of elements in the array</param>
        /// <param name="settings">User-configured settings</param>
        Task ExecuteAsync(string variableName, string arrayType, byte[] data, int length, Dictionary<string, string> settings);
    }
}
