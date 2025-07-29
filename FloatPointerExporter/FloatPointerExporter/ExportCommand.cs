using EnvDTE;
using EnvDTE80;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using System;
using System.ComponentModel.Design;
using System.IO;
using System.Runtime.InteropServices;
using System.Threading;
using Task = System.Threading.Tasks.Task;

namespace FloatPointerExporter
{
    internal sealed class ExportCommand
    {
        public const int CommandId = 0x0100;
        public static readonly Guid CommandSet = new Guid("8c1e03c3-64a9-4d6b-8f32-8e7a69a269b9");
        private readonly AsyncPackage package;

        private ExportCommand(AsyncPackage package, OleMenuCommandService commandService)
        {
            this.package = package;

            var menuCommandID = new CommandID(CommandSet, CommandId);
            var menuItem = new OleMenuCommand(Execute, menuCommandID)
            {
                Supported = true
            };
            commandService.AddCommand(menuItem);
        }

        public static async Task InitializeAsync(AsyncPackage package)
        {
            OleMenuCommandService commandService = await package.GetServiceAsync(typeof(IMenuCommandService)) as OleMenuCommandService;
            new ExportCommand(package, commandService);
        }

        private void Execute(object sender, EventArgs e)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var dte = (DTE2)Package.GetGlobalService(typeof(DTE));
            TextSelection selection = dte.ActiveDocument.Selection as TextSelection;
            string variableName = selection?.Text;
            if (string.IsNullOrEmpty(variableName))
            {
                VsShellUtilities.ShowMessageBox(package, "Select a pointer variable name first.", "Export", OLEMSGICON.OLEMSGICON_INFO, OLEMSGBUTTON.OLEMSGBUTTON_OK, OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                return;
            }

            var dialog = new ExportDialog();
            bool? result = dialog.ShowModal();
            if (result != true)
                return;

            int count = dialog.PointCount;
            string path = dialog.FilePath;

            try
            {
                Expression expr = dte.Debugger.GetExpression(variableName, false, 1);
                if (!expr.IsValidValue)
                {
                    VsShellUtilities.ShowMessageBox(package, "Unable to evaluate expression.", "Export", OLEMSGICON.OLEMSGICON_WARNING, OLEMSGBUTTON.OLEMSGBUTTON_OK, OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    return;
                }
                string addressStr = expr.Value;
                if (!addressStr.StartsWith("0x"))
                {
                    VsShellUtilities.ShowMessageBox(package, "Expression is not a pointer.", "Export", OLEMSGICON.OLEMSGICON_WARNING, OLEMSGBUTTON.OLEMSGBUTTON_OK, OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    return;
                }

                ulong address = Convert.ToUInt64(addressStr, 16);
                byte[] buffer = new byte[count * sizeof(float)];
                dte.Debugger.HexDisplayMode = true;
                for (int i = 0; i < buffer.Length; i++)
                {
                    var memExpr = dte.Debugger.GetExpression(string.Format("*(unsigned char*)0x{0:X}+{1}", address, i));
                    if (!byte.TryParse(memExpr.Value, System.Globalization.NumberStyles.HexNumber, null, out byte b))
                    {
                        throw new InvalidOperationException("Failed to read memory");
                    }
                    buffer[i] = b;
                }

                using (var writer = new StreamWriter(path))
                using (var br = new BinaryReader(new MemoryStream(buffer)))
                {
                    for (int i = 0; i < count; i++)
                    {
                        float value = br.ReadSingle();
                        writer.WriteLine(value);
                    }
                }
            }
            catch (Exception ex)
            {
                VsShellUtilities.ShowMessageBox(package, ex.Message, "Export", OLEMSGICON.OLEMSGICON_CRITICAL, OLEMSGBUTTON.OLEMSGBUTTON_OK, OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
            }
        }
    }
}
