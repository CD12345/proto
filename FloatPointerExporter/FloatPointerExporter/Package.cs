using System;
using System.Runtime.InteropServices;
using Microsoft.VisualStudio.Shell;
using Task = System.Threading.Tasks.Task;

namespace FloatPointerExporter
{
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [InstalledProductRegistration("Float Pointer Exporter", "Export float pointer vectors", "1.0")]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(Package.PackageGuidString)]
    public sealed class Package : AsyncPackage
    {
        public const string PackageGuidString = "d1b66db2-f9b1-4fb1-bb6d-51fdbe9e7dff";

        protected override async Task InitializeAsync(System.Threading.CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await this.JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);
            await ExportCommand.InitializeAsync(this);
        }
    }
}
