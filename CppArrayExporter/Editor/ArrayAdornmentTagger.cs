using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using CppArrayExporter.Debugger;
using CppArrayExporter.Export;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Text;
using Microsoft.VisualStudio.Text.Editor;
using Microsoft.VisualStudio.Text.Tagging;

namespace CppArrayExporter.Editor
{
    /// <summary>
    /// Tag for array adornments
    /// </summary>
    public class ArrayAdornmentTag : IntraTextAdornmentTag
    {
        public ArrayVariableInfo ArrayInfo { get; }
        public string FilePath { get; }
        public int Line { get; }

        public ArrayAdornmentTag(ArrayAdornment adornment, ArrayVariableInfo arrayInfo, string filePath, int line)
            : base(adornment, null)
        {
            ArrayInfo = arrayInfo;
            FilePath = filePath;
            Line = line;
        }
    }

    /// <summary>
    /// Tagger that identifies array variables and creates adornment tags
    /// </summary>
    public class ArrayAdornmentTagger : ITagger<IntraTextAdornmentTag>
    {
        private readonly IWpfTextView _textView;
        private readonly ITextBuffer _buffer;
        private readonly string _filePath;
        private bool _isHovering;
        private SnapshotPoint? _hoverPoint;

        public event EventHandler<SnapshotSpanEventArgs> TagsChanged;

        public ArrayAdornmentTagger(IWpfTextView textView, ITextBuffer buffer, string filePath)
        {
            _textView = textView;
            _buffer = buffer;
            _filePath = filePath;

            // Subscribe to mouse hover events
            _textView.MouseHover += OnMouseHover;
            _textView.LostAggregateFocus += OnLostFocus;
        }

        public IEnumerable<ITagSpan<IntraTextAdornmentTag>> GetTags(NormalizedSnapshotSpanCollection spans)
        {
            if (!_isHovering || !_hoverPoint.HasValue)
                yield break;

            if (!DebuggerService.Instance.IsDebugging)
                yield break;

            // Only process if we're in the right snapshot
            if (_hoverPoint.Value.Snapshot != _buffer.CurrentSnapshot)
                yield break;

            foreach (var span in spans)
            {
                // Check if the hover point is in this span
                if (!span.Contains(_hoverPoint.Value))
                    continue;

                // Get the word at the hover point
                var wordSpan = GetWordSpan(_hoverPoint.Value);
                if (!wordSpan.HasValue)
                    continue;

                var word = wordSpan.Value.GetText();
                if (string.IsNullOrWhiteSpace(word))
                    continue;

                // Check if this word is an array variable
                var line = _hoverPoint.Value.GetContainingLine();
                var lineNumber = line.LineNumber + 1; // VS line numbers are 1-based
                var column = _hoverPoint.Value.Position - line.Start.Position;

                ThreadHelper.JoinableTaskFactory.Run(async delegate
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

                    var arrayInfo = DebuggerService.Instance.GetArrayVariableAtLocation(
                        _filePath,
                        lineNumber,
                        column,
                        word);

                    if (arrayInfo != null && arrayInfo.IsSupported)
                    {
                        // Create adornment
                        var adornment = new ArrayAdornment(_textView, arrayInfo, _filePath, lineNumber);

                        // Create tag
                        var tag = new ArrayAdornmentTag(adornment, arrayInfo, _filePath, lineNumber);

                        // Yield tag span (positioned after the word)
                        var adornmentSpan = new SnapshotSpan(wordSpan.Value.End, 0);
                        var tagSpan = new TagSpan<IntraTextAdornmentTag>(adornmentSpan, tag);
                    }
                });

                yield break;
            }
        }

        private void OnMouseHover(object sender, MouseHoverEventArgs e)
        {
            // Get the position under the mouse
            var position = e.TextPosition;
            if (!position.HasValue)
            {
                ClearHover();
                return;
            }

            _isHovering = true;
            _hoverPoint = position.Value;

            // Notify that tags have changed
            var span = new SnapshotSpan(_buffer.CurrentSnapshot, 0, _buffer.CurrentSnapshot.Length);
            TagsChanged?.Invoke(this, new SnapshotSpanEventArgs(span));
        }

        private void OnLostFocus(object sender, EventArgs e)
        {
            ClearHover();
        }

        private void ClearHover()
        {
            if (!_isHovering)
                return;

            _isHovering = false;
            _hoverPoint = null;

            // Notify that tags have changed
            var span = new SnapshotSpan(_buffer.CurrentSnapshot, 0, _buffer.CurrentSnapshot.Length);
            TagsChanged?.Invoke(this, new SnapshotSpanEventArgs(span));
        }

        private SnapshotSpan? GetWordSpan(SnapshotPoint point)
        {
            var line = point.GetContainingLine();
            var text = line.GetText();
            var position = point.Position - line.Start.Position;

            if (position < 0 || position >= text.Length)
                return null;

            // Find word boundaries
            var start = position;
            var end = position;

            // Move start backward to find start of word
            while (start > 0 && IsWordChar(text[start - 1]))
                start--;

            // Move end forward to find end of word
            while (end < text.Length && IsWordChar(text[end]))
                end++;

            if (start >= end)
                return null;

            var spanStart = line.Start.Position + start;
            var spanEnd = line.Start.Position + end;

            return new SnapshotSpan(point.Snapshot, spanStart, spanEnd - spanStart);
        }

        private bool IsWordChar(char c)
        {
            return char.IsLetterOrDigit(c) || c == '_';
        }
    }
}
