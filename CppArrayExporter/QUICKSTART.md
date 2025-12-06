# Quick Start Guide

Get started with CppArrayExporter in 5 minutes!

## 1. Installation

**Option A: Build from source (if you're a developer)**
```cmd
# Open in Visual Studio
start CppArrayExporter.sln

# Build (Ctrl+Shift+B) then install the VSIX from bin\Debug or bin\Release
```

**Option B: Install pre-built VSIX**
```cmd
# Double-click the VSIX file
CppArrayExporter.vsix
```

## 2. Set Up Python (Optional but Recommended)

```cmd
# Install Python 3.x from python.org

# Install required packages
pip install matplotlib numpy

# Copy the example plotting script
# From: CppArrayExporter\Examples\plot.py
# To: Your C++ project directory
```

## 3. Try It Out

### Step 1: Create a test program

```cpp
#include <cmath>
int main() {
    const int size = 100;
    float* data = new float[size];

    for (int i = 0; i < size; i++) {
        data[i] = sin(2.0f * 3.14159f * i / size);
    }

    // SET BREAKPOINT HERE
    delete[] data;
    return 0;
}
```

### Step 2: Debug and hover

1. Build and start debugging (F5)
2. When the breakpoint hits, **hover over `data`**
3. You should see a yellow box with "Export" and "⚙ Settings" buttons

### Step 3: Configure export

1. Click "⚙ Settings"
2. Fill in:
   - **Length Expression**: `size` (or just `100`)
   - **Export Action**: "JSON + Command Line"
   - **Output Path**: `{TempPath}\{VariableName}.json`
   - **Command Line**: `python plot.py "{FilePath}"`
   - **Working Directory**: `{SourceDirectory}`
3. Click "OK"

### Step 4: Export!

1. Click the "Export" button on the hover adornment
2. The array will be exported to JSON
3. Python will automatically plot the data
4. A matplotlib window will appear showing your sine wave

## 4. Common Use Cases

### Debugging Signal Processing

```cpp
float* signal = processSignal(input, size);
// Hover over 'signal' and export to visualize
```

### Comparing Before/After

```cpp
double* original = loadData(size);
double* filtered = applyFilter(original, size);
// Export both 'original' and 'filtered' to compare
```

### Dynamic Arrays

```cpp
int count = calculateSize();
float* results = new float[count];
processData(results, count);
// Length expression: count
```

## 5. Tips

- **Persistent Settings**: Export settings are saved in `.cpp-array-exports.json` in your source directory
- **Expression Length**: Use `{variableName}` for complex expressions
- **Multiple Exports**: Each variable can have its own export configuration
- **Keyboard Workflow**: Use breakpoints + hover for quick exports

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Hover doesn't show export UI | Ensure you're in break mode (debugger paused) |
| Python doesn't run | Check Python is in PATH, or use full path to python.exe |
| Length expression fails | Test the expression in the Watch window first |
| Settings not loading | Check `.cpp-array-exports.json` is valid JSON |

## Next Steps

- Read [README.md](README.md) for complete documentation
- See [Examples/example.cpp](Examples/example.cpp) for more usage patterns
- Customize the Python script for your needs
- Implement custom export actions (see README.md)

## Getting Help

- Check the [BUILD.md](BUILD.md) for build issues
- Look in Visual Studio Output window for error messages
- Check the ActivityLog.xml: `%APPDATA%\Microsoft\VisualStudio\17.0_*\ActivityLog.xml`

---

**Happy debugging! 🎉**
