# Roman Numeral Converter

A simple web page to convert between integers and Roman numerals. This converter supports converting integers to Roman numerals and vice versa.

## Features

- Convert integers to Roman numerals
- Handle invalid inputs gracefully
- Support a wide range of integers (e.g., 1 to 3999)

## Implementation

The converter is implemented in Javascript and follows the standard rules for Roman numeral conversion. It recursively subtracts the largest Roman numeral value from the initial number, building a string with the subtracted symbols until no value is found and displays that string in a textbox on the HTML page.
