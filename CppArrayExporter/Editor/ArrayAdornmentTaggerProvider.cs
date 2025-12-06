using System;
using System.ComponentModel.Composition;
using Microsoft.VisualStudio.Text;
using Microsoft.VisualStudio.Text.Editor;
using Microsoft.VisualStudio.Text.Tagging;
using Microsoft.VisualStudio.Utilities;
using Microsoft.VisualStudio.Shell;
using CppArrayExporter.Export;

namespace CppArrayExporter.Editor
{
    /// <summary>
    /// MEF provider for array adornment taggers
    /// </summary>
    [Export(typeof(IViewTaggerProvider))]
    [ContentType("C/C++")]
    [ContentType("code")]
    [TagType(typeof(IntraTextAdornmentTag))]
    public class ArrayAdornmentTaggerProvider : IViewTaggerProvider
    {
        public ITagger<T> CreateTagger<T>(ITextView textView, ITextBuffer buffer) where T : ITag
        {
            if (textView == null || buffer == null)
                return null;

            // Only create tagger for C++ files
            if (!IsValidContentType(buffer))
                return null;

            var wpfTextView = textView as IWpfTextView;
            if (wpfTextView == null)
                return null;

            // Get file path
            if (!buffer.Properties.TryGetProperty(typeof(ITextDocument), out ITextDocument document))
                return null;

            var filePath = document.FilePath;
            if (string.IsNullOrEmpty(filePath))
                return null;

            // Only process C++ files
            var extension = System.IO.Path.GetExtension(filePath).ToLowerInvariant();
            if (extension != ".cpp" && extension != ".c" && extension != ".cc" && extension != ".cxx" &&
                extension != ".h" && extension != ".hpp" && extension != ".hxx")
                return null;

            // Load export definitions for this file when debug session starts
            ThreadHelper.JoinableTaskFactory.RunAsync(async () =>
            {
                await ExportManager.Instance.LoadExportDefinitionsForFileAsync(filePath);
            }).FireAndForget();

            return new ArrayAdornmentTagger(wpfTextView, buffer, filePath) as ITagger<T>;
        }

        private bool IsValidContentType(ITextBuffer buffer)
        {
            var contentType = buffer.ContentType;

            // Check if this is a C++ content type
            if (contentType.IsOfType("C/C++") || contentType.IsOfType("code"))
                return true;

            return false;
        }
    }
}
