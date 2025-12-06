using Microsoft.Win32;
using System;
using System.Windows;

namespace FloatPointerExporter
{
    public partial class ExportDialog : Window
    {
        public ExportDialog()
        {
            InitializeComponent();
        }

        public string FilePath { get; private set; }
        public int PointCount { get; private set; }

        private void Browse_Click(object sender, RoutedEventArgs e)
        {
            var dlg = new SaveFileDialog();
            dlg.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*";
            if (dlg.ShowDialog() == true)
            {
                filePathBox.Text = dlg.FileName;
            }
        }

        private void Ok_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(filePathBox.Text) || !int.TryParse(countBox.Text, out int count) || count <= 0)
            {
                MessageBox.Show(this, "Enter valid values.", "Export", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }
            FilePath = filePathBox.Text;
            PointCount = count;
            DialogResult = true;
        }
    }
}
