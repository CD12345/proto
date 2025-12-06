# C++ Array Exporter for Visual Studio

A Visual Studio 2022/2026 extension that enables exporting C++ arrays (float*, double*) to JSON during debugging sessions, with built-in support for calling external tools like Python scripts for visualization.

## Features

- **Hover Adornments**: Hover over array variables in your C++ code during debugging to see export options
- **Runtime Length Evaluation**: Specify array length using expressions that are evaluated at runtime
- **Flexible Export Actions**: Extensible export action system with built-in JSON export
- **Command Line Integration**: Automatically call external tools (e.g., Python plotting scripts) after export
- **Persistent Settings**: Export configurations are saved alongside your source files

## Installation

1. Build the project in Visual Studio
2. Install the generated `.vsix` file from `bin/Debug/` or `bin/Release/`
3. Restart Visual Studio

## Usage

### Basic Workflow

1. **Start Debugging**: Begin a C++ debugging session in Visual Studio
2. **Hover Over Array**: Hover your mouse over a `float*` or `double*` variable
3. **Configure Export**: Click "Settings" to configure the export
   - Enter the array length (can be a variable name or expression like `{size * 2}`)
   - Select export action (default: JSON + Command Line)
   - Configure export settings (output path, command line, etc.)
4. **Export**: Click "Export" to export the array

### Export Settings

#### Length Expression
The length can be specified as:
- A number: `100`
- A variable: `arraySize`
- An expression in curly braces: `{count * 2}`

The expression is evaluated in the current debug context.

#### JSON + Command Line Export Action

This built-in action exports arrays to JSON and optionally executes a command line.

**Settings:**

- **Output Path**: Path for the JSON file
  - Placeholders: `{TempPath}`, `{VariableName}`, `{Timestamp}`
  - Default: `{TempPath}\{VariableName}.json`

- **Command Line**: Command to execute after export
  - Placeholder: `{FilePath}` (path to generated JSON)
  - Example: `python plot.py "{FilePath}"`

- **Working Directory**: Directory where the command runs
  - Placeholder: `{SourceDirectory}` (directory of your C++ source file)
  - Default: `{SourceDirectory}`

### JSON Output Format

```json
{
  "variableName": "myArray",
  "type": "float*",
  "length": 100,
  "timestamp": "2025-12-06T10:30:00.000Z",
  "values": [1.0, 2.0, 3.0, ...]
}
```

### Example Python Plotting Script

Save this as `plot.py` in your project directory:

```python
import json
import sys
import matplotlib.pyplot as plt

if len(sys.argv) < 2:
    print("Usage: python plot.py <json_file>")
    sys.exit(1)

with open(sys.argv[1], 'r') as f:
    data = json.load(f)

plt.figure(figsize=(10, 6))
plt.plot(data['values'])
plt.title(f"{data['variableName']} ({data['type']})")
plt.xlabel('Index')
plt.ylabel('Value')
plt.grid(True)
plt.show()
```

Configure the export action with:
- **Command Line**: `python plot.py "{FilePath}"`
- **Working Directory**: `{SourceDirectory}`

## Persisted Settings

Export configurations are saved in `.cpp-array-exports.json` files in the same directory as your source files. These files are automatically loaded when you start a debugging session.

Example `.cpp-array-exports.json`:

```json
{
  "version": "1.0",
  "definitions": [
    {
      "variableName": "data",
      "lengthExpression": "dataSize",
      "exportActionType": "json-commandline",
      "settings": {
        "OutputPath": "{TempPath}\\{VariableName}.json",
        "CommandLine": "python plot.py \"{FilePath}\"",
        "WorkingDirectory": "{SourceDirectory}"
      },
      "filePath": "C:\\Projects\\MyApp\\main.cpp",
      "lineNumber": 42
    }
  ]
}
```

## Extending the Extension

You can create custom export actions by implementing the `IExportAction` interface:

```csharp
public class MyCustomExportAction : IExportAction
{
    public string TypeId => "my-custom-action";
    public string DisplayName => "My Custom Action";
    public string Description => "Does something custom with the array";

    public IEnumerable<ExportActionSetting> GetSettings()
    {
        return new[]
        {
            new ExportActionSetting
            {
                Key = "MySetting",
                DisplayName = "My Setting",
                DefaultValue = "default",
                Description = "Description of my setting"
            }
        };
    }

    public async Task ExecuteAsync(string variableName, string arrayType,
        byte[] data, int length, Dictionary<string, string> settings)
    {
        // Your custom export logic here
    }
}
```

Register your action in `ExportManager.InitializeAsync()`:

```csharp
RegisterExportAction(new MyCustomExportAction());
```

## Supported Array Types

- `float*`
- `double*`

## Requirements

- Visual Studio 2022 or 2026
- .NET Framework 4.8
- C++ debugging support

## Troubleshooting

### Array not detected on hover
- Ensure you're in a debugging session (not just a breakpoint set)
- Verify the variable is a `float*` or `double*`
- Check that you're hovering directly over the variable name

### Length expression fails
- Verify the expression is valid in the current debug context
- Use the Watch window to test your expression first
- Make sure variables used in the expression are in scope

### Command line doesn't execute
- Check that the executable (e.g., `python`) is in your PATH
- Use absolute paths if needed
- Verify the working directory setting

### Export definitions not loading
- Check that `.cpp-array-exports.json` is in the same directory as your source file
- Verify the JSON file is valid
- Check the Output window for any error messages

## License

MIT License - see LICENSE.txt for details

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
