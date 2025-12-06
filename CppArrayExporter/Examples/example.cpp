/*
 * Example C++ code demonstrating CppArrayExporter usage
 *
 * To use this extension:
 * 1. Build and debug this program in Visual Studio
 * 2. Set a breakpoint at the line marked "// BREAKPOINT HERE"
 * 3. When the debugger breaks, hover over array variables (data, result, etc.)
 * 4. Configure export settings and export arrays
 */

#include <iostream>
#include <cmath>
#include <random>

// Generate sine wave data
void generateSineWave(float* data, int size, float frequency = 1.0f) {
    for (int i = 0; i < size; i++) {
        data[i] = std::sin(2.0f * 3.14159f * frequency * i / size);
    }
}

// Apply filter to data
void applyLowPassFilter(double* input, double* output, int size, double alpha = 0.1) {
    output[0] = input[0];
    for (int i = 1; i < size; i++) {
        output[i] = alpha * input[i] + (1.0 - alpha) * output[i - 1];
    }
}

// Generate random data
void generateRandomData(float* data, int size) {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::normal_distribution<float> dist(0.0f, 1.0f);

    for (int i = 0; i < size; i++) {
        data[i] = dist(gen);
    }
}

int main() {
    const int dataSize = 200;

    // Example 1: Sine wave (float array)
    float* sineData = new float[dataSize];
    generateSineWave(sineData, dataSize, 2.0f);

    std::cout << "Generated sine wave with " << dataSize << " samples" << std::endl;

    // BREAKPOINT HERE - Hover over 'sineData' and export it
    // Suggested export settings:
    //   - Length: dataSize (or just "200")
    //   - Command: python plot.py "{FilePath}"

    // Example 2: Random data (float array)
    float* randomData = new float[dataSize];
    generateRandomData(randomData, dataSize);

    std::cout << "Generated random data with " << dataSize << " samples" << std::endl;

    // BREAKPOINT HERE - Hover over 'randomData' and export it

    // Example 3: Filtered data (double array)
    double* inputSignal = new double[dataSize];
    double* filteredSignal = new double[dataSize];

    // Convert sine wave to double
    for (int i = 0; i < dataSize; i++) {
        inputSignal[i] = static_cast<double>(sineData[i]);
    }

    applyLowPassFilter(inputSignal, filteredSignal, dataSize, 0.3);

    std::cout << "Applied low-pass filter" << std::endl;

    // BREAKPOINT HERE - Hover over 'filteredSignal' and export it
    // You can also export 'inputSignal' to compare

    // Example 4: Dynamic size
    int customSize = 100;
    float* customData = new float[customSize];
    generateSineWave(customData, customSize, 5.0f);

    // BREAKPOINT HERE - Hover over 'customData' and export it
    // Length expression: customSize (or "{customSize}")

    // Cleanup
    delete[] sineData;
    delete[] randomData;
    delete[] inputSignal;
    delete[] filteredSignal;
    delete[] customData;

    std::cout << "Done!" << std::endl;
    return 0;
}

/*
 * Tips for using CppArrayExporter:
 *
 * 1. Export Settings Configuration:
 *    - Output Path: {TempPath}\{VariableName}_{Timestamp}.json
 *    - Command Line: python plot.py "{FilePath}"
 *    - Working Directory: {SourceDirectory}
 *
 * 2. Length Expressions:
 *    - Simple: 200
 *    - Variable: dataSize
 *    - Expression: {dataSize * 2}
 *    - Member: {obj.count}
 *
 * 3. Persistent Settings:
 *    - Export settings are saved in .cpp-array-exports.json
 *    - The file is created in the same directory as this source file
 *    - Settings are automatically loaded when you start debugging
 *
 * 4. Python Setup:
 *    - Ensure Python is installed and in your PATH
 *    - Install required packages: pip install matplotlib numpy
 *    - Copy plot.py to your project directory
 *
 * 5. Troubleshooting:
 *    - If hover doesn't show the export UI, ensure you're in break mode
 *    - Verify the variable is float* or double*
 *    - Check the Output window for error messages
 */
