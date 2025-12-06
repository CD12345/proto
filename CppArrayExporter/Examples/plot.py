#!/usr/bin/env python3
"""
Example Python script for plotting C++ arrays exported by CppArrayExporter.

Usage:
    python plot.py <json_file>

The JSON file should contain:
    - variableName: name of the array
    - type: array type (float* or double*)
    - length: number of elements
    - values: array of numeric values
"""

import json
import sys
import os

try:
    import matplotlib.pyplot as plt
    import numpy as np
except ImportError:
    print("Error: This script requires matplotlib and numpy.")
    print("Install with: pip install matplotlib numpy")
    sys.exit(1)


def plot_array(json_file):
    """Load and plot array data from JSON file."""

    # Load data
    with open(json_file, 'r') as f:
        data = json.load(f)

    variable_name = data['variableName']
    array_type = data['type']
    length = data['length']
    values = np.array(data['values'])
    timestamp = data.get('timestamp', 'unknown')

    # Create figure with subplots
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8))

    # Plot 1: Line plot
    ax1.plot(values, linewidth=2)
    ax1.set_title(f"{variable_name} ({array_type}) - {length} elements", fontsize=14, fontweight='bold')
    ax1.set_xlabel('Index', fontsize=12)
    ax1.set_ylabel('Value', fontsize=12)
    ax1.grid(True, alpha=0.3)

    # Add statistics
    stats_text = f"Min: {values.min():.4f}  Max: {values.max():.4f}  Mean: {values.mean():.4f}  Std: {values.std():.4f}"
    ax1.text(0.02, 0.98, stats_text, transform=ax1.transAxes,
             verticalalignment='top', bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.5))

    # Plot 2: Histogram
    ax2.hist(values, bins=50, alpha=0.7, color='steelblue', edgecolor='black')
    ax2.set_title('Distribution', fontsize=12, fontweight='bold')
    ax2.set_xlabel('Value', fontsize=12)
    ax2.set_ylabel('Frequency', fontsize=12)
    ax2.grid(True, alpha=0.3, axis='y')

    plt.tight_layout()

    # Save plot
    output_file = json_file.replace('.json', '.png')
    plt.savefig(output_file, dpi=150, bbox_inches='tight')
    print(f"Plot saved to: {output_file}")

    # Show plot
    plt.show()


def main():
    if len(sys.argv) < 2:
        print("Usage: python plot.py <json_file>")
        print("\nExample:")
        print("  python plot.py C:\\Temp\\myArray.json")
        sys.exit(1)

    json_file = sys.argv[1]

    if not os.path.exists(json_file):
        print(f"Error: File not found: {json_file}")
        sys.exit(1)

    try:
        plot_array(json_file)
    except Exception as e:
        print(f"Error plotting array: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
