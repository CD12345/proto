using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using CppArrayExporter.Debugger;
using CppArrayExporter.Export;
using CppArrayExporter.UI;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Text.Editor;

namespace CppArrayExporter.Editor
{
    /// <summary>
    /// WPF control that displays the array export adornment
    /// </summary>
    public class ArrayAdornment : Border
    {
        private readonly IWpfTextView _textView;
        private readonly ArrayVariableInfo _arrayInfo;
        private readonly string _filePath;
        private readonly int _line;

        public ArrayAdornment(IWpfTextView textView, ArrayVariableInfo arrayInfo, string filePath, int line)
        {
            _textView = textView;
            _arrayInfo = arrayInfo;
            _filePath = filePath;
            _line = line;

            BuildUI();
        }

        private void BuildUI()
        {
            // Create the main panel
            var panel = new StackPanel
            {
                Orientation = Orientation.Horizontal,
                Background = new SolidColorBrush(Color.FromArgb(240, 255, 255, 220)),
                Margin = new Thickness(5, 0, 0, 0)
            };

            // Export button
            var exportButton = new Button
            {
                Content = "Export",
                Padding = new Thickness(8, 2, 8, 2),
                Margin = new Thickness(5, 2, 5, 2),
                FontSize = 11,
                Cursor = System.Windows.Input.Cursors.Hand
            };
            exportButton.Click += ExportButton_Click;
            panel.Children.Add(exportButton);

            // Settings button
            var settingsButton = new Button
            {
                Content = "⚙ Settings",
                Padding = new Thickness(8, 2, 8, 2),
                Margin = new Thickness(0, 2, 5, 2),
                FontSize = 11,
                Cursor = System.Windows.Input.Cursors.Hand
            };
            settingsButton.Click += SettingsButton_Click;
            panel.Children.Add(settingsButton);

            // Configure border
            BorderBrush = new SolidColorBrush(Color.FromArgb(255, 200, 200, 100));
            BorderThickness = new Thickness(1);
            CornerRadius = new CornerRadius(3);
            Padding = new Thickness(0);
            Child = panel;

            // Set tooltip
            ToolTip = $"Array: {_arrayInfo.Name} ({_arrayInfo.Type})";
        }

        private async void ExportButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

                // Get export settings
                var settings = ExportManager.Instance.GetExportSettings(_filePath, _line, _arrayInfo.Name);

                if (settings == null)
                {
                    // No settings configured, open settings dialog
                    SettingsButton_Click(sender, e);
                    return;
                }

                // Execute export
                await ExportManager.Instance.ExportArrayAsync(_arrayInfo, settings);

                // Show success message
                MessageBox.Show($"Array '{_arrayInfo.Name}' exported successfully!",
                    "Export Success",
                    MessageBoxButton.OK,
                    MessageBoxImage.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Export failed: {ex.Message}",
                    "Export Error",
                    MessageBoxButton.OK,
                    MessageBoxImage.Error);
            }
        }

        private async void SettingsButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

                // Get existing settings
                var existingSettings = ExportManager.Instance.GetExportSettings(_filePath, _line, _arrayInfo.Name);

                // Show settings dialog
                var dialog = new ExportSettingsDialog(_arrayInfo.Name, existingSettings)
                {
                    Owner = Application.Current.MainWindow
                };

                if (dialog.ShowDialog() == true)
                {
                    // Save settings
                    await ExportManager.Instance.SaveExportSettingsAsync(_filePath, _line, dialog.Settings);

                    MessageBox.Show($"Export settings saved for '{_arrayInfo.Name}'.",
                        "Settings Saved",
                        MessageBoxButton.OK,
                        MessageBoxImage.Information);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to save settings: {ex.Message}",
                    "Settings Error",
                    MessageBoxButton.OK,
                    MessageBoxImage.Error);
            }
        }
    }
}
