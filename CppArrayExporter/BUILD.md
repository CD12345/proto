# Building CppArrayExporter

This document provides instructions for building the CppArrayExporter Visual Studio extension.

## Prerequisites

### Required Software

1. **Visual Studio 2022 or 2026**
   - Community, Professional, or Enterprise edition
   - Must include the "Visual Studio extension development" workload

2. **.NET Framework 4.8 SDK**
   - Usually included with Visual Studio

3. **NuGet Package Manager**
   - Included with Visual Studio

### Verifying Prerequisites

To verify you have the required workload:
1. Open Visual Studio Installer
2. Click "Modify" on your Visual Studio installation
3. Ensure "Visual Studio extension development" is checked under "Workloads"

## Building the Extension

### Method 1: Using Visual Studio (Recommended)

1. **Open the project**
   ```
   Open CppArrayExporter.csproj in Visual Studio
   ```

2. **Restore NuGet packages**
   - Right-click on the solution in Solution Explorer
   - Select "Restore NuGet Packages"
   - Wait for packages to download

3. **Build the project**
   - Select "Build > Build Solution" (Ctrl+Shift+B)
   - Or right-click the project and select "Build"

4. **Locate the VSIX file**
   - Debug build: `bin\Debug\CppArrayExporter.vsix`
   - Release build: `bin\Release\CppArrayExporter.vsix`

### Method 2: Using MSBuild (Command Line)

1. **Open Developer Command Prompt for Visual Studio**
   - Start Menu > Visual Studio 2022 > Developer Command Prompt

2. **Navigate to project directory**
   ```cmd
   cd path\to\CppArrayExporter
   ```

3. **Restore NuGet packages**
   ```cmd
   nuget restore CppArrayExporter.csproj
   ```

4. **Build the project**
   ```cmd
   msbuild CppArrayExporter.csproj /p:Configuration=Release
   ```

5. **Locate the VSIX file**
   ```cmd
   dir bin\Release\CppArrayExporter.vsix
   ```

## Installing the Extension

### For Testing (Experimental Instance)

When you build the project in Debug mode and press F5:
- Visual Studio automatically launches a new instance with the extension loaded
- This is called the "Experimental Instance"
- It's isolated from your main Visual Studio installation
- Perfect for testing and debugging

### For Regular Use

1. **Close all Visual Studio instances**

2. **Double-click the VSIX file**
   ```
   bin\Release\CppArrayExporter.vsix
   ```

3. **Follow the installation wizard**
   - Select which Visual Studio versions to install to
   - Click "Install"

4. **Restart Visual Studio**

5. **Verify installation**
   - Go to Extensions > Manage Extensions
   - Search for "C++ Array Exporter"
   - It should appear in the "Installed" section

## Uninstalling the Extension

### Method 1: Extensions Manager

1. Go to Extensions > Manage Extensions
2. Find "C++ Array Exporter" in the "Installed" section
3. Click "Uninstall"
4. Restart Visual Studio

### Method 2: Command Line

```cmd
"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\VSIXInstaller.exe" /uninstall:CppArrayExporter.E8F8C9D1-2B3A-4F5E-9C7D-1A2B3C4D5E6F
```

## Debugging the Extension

1. **Set CppArrayExporter as the startup project**
   - Right-click the project in Solution Explorer
   - Select "Set as Startup Project"

2. **Configure debug settings** (already configured in .csproj)
   - Start Action: External Program
   - External Program: Visual Studio devenv.exe
   - Command Line Arguments: /rootsuffix Exp

3. **Set breakpoints** in the extension code

4. **Press F5** to start debugging
   - A new Visual Studio instance will launch (Experimental Instance)
   - Your breakpoints will be hit when you use the extension

5. **Test the extension**
   - Open a C++ project in the experimental instance
   - Start debugging a C++ program
   - Hover over array variables to trigger the extension

## Troubleshooting Build Issues

### Issue: NuGet packages won't restore

**Solution:**
```cmd
# Clear NuGet cache
nuget locals all -clear

# Restore packages
nuget restore CppArrayExporter.csproj
```

### Issue: VSSDK build tools errors

**Solution:**
- Ensure you have the "Visual Studio extension development" workload installed
- Update to the latest version of Visual Studio
- Try cleaning and rebuilding:
  ```cmd
  msbuild CppArrayExporter.csproj /t:Clean
  msbuild CppArrayExporter.csproj /t:Rebuild
  ```

### Issue: Missing Microsoft.VisualStudio.* assemblies

**Solution:**
- Verify the Visual Studio SDK is installed
- Check that package references in .csproj are correct
- Try updating the NuGet packages:
  ```cmd
  nuget update CppArrayExporter.csproj
  ```

### Issue: XAML build errors

**Solution:**
- Ensure the XAML file (ExportSettingsDialog.xaml) has Build Action set to "Page"
- Check that the code-behind file (.xaml.cs) has Build Action set to "Compile"
- Clean and rebuild the solution

### Issue: Extension doesn't load in Visual Studio

**Solution:**
1. Check the ActivityLog.xml for errors:
   ```
   %APPDATA%\Microsoft\VisualStudio\17.0_<id>\ActivityLog.xml
   ```
2. Ensure all dependencies are included in the VSIX
3. Verify the extension targets the correct Visual Studio version in source.extension.vsixmanifest

## Building for Different Visual Studio Versions

The extension is configured to work with Visual Studio 2022 and 2026 (version range 17.0-18.0).

To target different versions:

1. **Edit source.extension.vsixmanifest**
   ```xml
   <InstallationTarget Id="Microsoft.VisualStudio.Community" Version="[17.0,19.0)">
   ```

2. **Update package references** if needed
   - Different VS versions may require different SDK package versions
   - Check the Visual Studio SDK version compatibility

## Creating a Release Build

1. **Update version numbers**
   - Edit `source.extension.vsixmanifest` and update the version
   - Edit `Properties\AssemblyInfo.cs` and update AssemblyVersion

2. **Build in Release mode**
   ```cmd
   msbuild CppArrayExporter.csproj /p:Configuration=Release
   ```

3. **Test the release build**
   - Install the VSIX from `bin\Release\`
   - Test thoroughly with sample C++ projects

4. **Package for distribution**
   - The VSIX file is ready to distribute
   - Consider signing the VSIX for production use

## Additional Resources

- [Visual Studio SDK Documentation](https://docs.microsoft.com/en-us/visualstudio/extensibility/)
- [VSIX Extension Schema Reference](https://docs.microsoft.com/en-us/visualstudio/extensibility/vsix-extension-schema-2-0-reference)
- [MEF in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/extensibility/managed-extensibility-framework-in-the-editor)
