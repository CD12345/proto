using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using CppArrayExporter.Export;

namespace CppArrayExporter.UI
{
    public partial class ExportSettingsDialog : Window
    {
        private readonly Dictionary<string, TextBox> _settingTextBoxes = new Dictionary<string, TextBox>();

        public ExportSettings Settings { get; private set; }

        public ExportSettingsDialog(string variableName, ExportSettings existingSettings = null)
        {
            InitializeComponent();

            VariableNameTextBox.Text = variableName;

            // Load available export actions
            var exportActions = ExportManager.Instance.GetAvailableExportActions().ToList();
            ExportActionComboBox.ItemsSource = exportActions;

            if (existingSettings != null)
            {
                // Load existing settings
                LengthExpressionTextBox.Text = existingSettings.LengthExpression;

                var selectedAction = exportActions.FirstOrDefault(a => a.TypeId == existingSettings.ExportAction?.TypeId);
                if (selectedAction != null)
                {
                    ExportActionComboBox.SelectedItem = selectedAction;
                }

                Settings = existingSettings;
            }
            else
            {
                // Select first action by default
                if (exportActions.Count > 0)
                {
                    ExportActionComboBox.SelectedIndex = 0;
                }

                Settings = new ExportSettings
                {
                    VariableName = variableName,
                    ActionSettings = new Dictionary<string, string>()
                };
            }
        }

        private void ExportActionComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selectedAction = ExportActionComboBox.SelectedItem as IExportAction;
            if (selectedAction == null)
                return;

            // Update description
            ExportActionDescription.Text = selectedAction.Description;

            // Clear and rebuild settings panel
            SettingsPanel.Children.Clear();
            _settingTextBoxes.Clear();

            var actionSettings = selectedAction.GetSettings();
            foreach (var setting in actionSettings)
            {
                // Label
                var label = new Label
                {
                    Content = setting.DisplayName + ":",
                    Margin = new Thickness(0, 10, 0, 5)
                };
                SettingsPanel.Children.Add(label);

                // TextBox
                var textBox = new TextBox
                {
                    Padding = new Thickness(5),
                    Margin = new Thickness(0, 0, 0, 5),
                    ToolTip = setting.Description
                };

                // Set value from existing settings or default
                if (Settings?.ActionSettings != null && Settings.ActionSettings.ContainsKey(setting.Key))
                {
                    textBox.Text = Settings.ActionSettings[setting.Key];
                }
                else
                {
                    textBox.Text = setting.DefaultValue;
                }

                SettingsPanel.Children.Add(textBox);
                _settingTextBoxes[setting.Key] = textBox;

                // Description
                if (!string.IsNullOrEmpty(setting.Description))
                {
                    var description = new TextBlock
                    {
                        Text = setting.Description,
                        Margin = new Thickness(0, 0, 0, 5),
                        FontSize = 11,
                        Foreground = System.Windows.Media.Brushes.Gray,
                        TextWrapping = TextWrapping.Wrap
                    };
                    SettingsPanel.Children.Add(description);
                }
            }
        }

        private void OkButton_Click(object sender, RoutedEventArgs e)
        {
            // Validate inputs
            if (string.IsNullOrWhiteSpace(LengthExpressionTextBox.Text))
            {
                MessageBox.Show("Please enter a length expression.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            var selectedAction = ExportActionComboBox.SelectedItem as IExportAction;
            if (selectedAction == null)
            {
                MessageBox.Show("Please select an export action.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Build settings
            Settings = new ExportSettings
            {
                VariableName = VariableNameTextBox.Text,
                LengthExpression = LengthExpressionTextBox.Text.Trim(),
                ExportAction = selectedAction,
                ActionSettings = new Dictionary<string, string>()
            };

            // Collect action settings
            foreach (var kvp in _settingTextBoxes)
            {
                Settings.ActionSettings[kvp.Key] = kvp.Value.Text;
            }

            DialogResult = true;
            Close();
        }

        private void CancelButton_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }
    }
}
