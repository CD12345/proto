using System;
using System.Runtime.InteropServices;
using System.Threading;
using Microsoft.VisualStudio.Shell;
using Task = System.Threading.Tasks.Task;

namespace CppArrayExporter
{
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [Guid(CppArrayExporterPackage.PackageGuidString)]
    [ProvideAutoLoad(Microsoft.VisualStudio.Shell.Interop.UIContextGuids80.Debugging, PackageAutoLoadFlags.BackgroundLoad)]
    public sealed class CppArrayExporterPackage : AsyncPackage
    {
        public const string PackageGuidString = "E8F8C9D1-2B3A-4F5E-9C7D-1A2B3C4D5E6F";

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await this.JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);

            // Initialize the debugger service
            var debuggerService = DebuggerService.Instance;
            debuggerService.Initialize(this);

            // Initialize the export manager
            var exportManager = ExportManager.Instance;
            await exportManager.InitializeAsync(this);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                DebuggerService.Instance?.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
