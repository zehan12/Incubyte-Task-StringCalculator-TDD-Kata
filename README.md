# String Calculator TTD Kata

The String Calculator TTD Kata is a popular coding exercise designed to help developers practice Test-Driven Development (TDD) and incremental design. Below is a comprehensive README file that outlines the task, its requirements, and how to approach it.

## Overview

The goal of this kata is to create a simple String Calculator with a method Add(string numbers) that takes a string input and returns the sum of the numbers in the string. The implementation should evolve incrementally, following TDD principles.

## Hosted Link

## Frontend UI for Testing

The String Calculator frontend is a React-based web application that allows users to input strings of numbers (with various delimiters) and calculates their sum. It includes a user-friendly interface with predefined examples, error handling, and result display.

## ScreenShots

[![Screenshot-from-2025-02-13-17-04-21.png](https://i.postimg.cc/pVD61ZNw/Screenshot-from-2025-02-13-17-04-21.png)](https://postimg.cc/jCScDySc)
[![Screenshot-from-2025-02-13-17-04-31.png](https://i.postimg.cc/QMHz4Zsm/Screenshot-from-2025-02-13-17-04-31.png)](https://postimg.cc/TyvQ1SK5)
[![Screenshot-from-2025-02-13-17-14-21.png](https://i.postimg.cc/5y7vkTf5/Screenshot-from-2025-02-13-17-14-21.png)](https://postimg.cc/bSnsZ6Dd)
[![Screenshot-from-2025-02-13-17-05-01.png](https://i.postimg.cc/J4CWs0mL/Screenshot-from-2025-02-13-17-05-01.png)](https://postimg.cc/nM2W5HCR)
[![Screenshot-from-2025-02-13-17-05-05.png](https://i.postimg.cc/nrBbdb4g/Screenshot-from-2025-02-13-17-05-05.png)](https://postimg.cc/ctxbHz5B)
[![Screenshot-from-2025-02-13-17-05-13.png](https://i.postimg.cc/hGtnKYnQ/Screenshot-from-2025-02-13-17-05-13.png)](https://postimg.cc/fVppKBJM)
[![Screenshot-from-2025-02-13-17-05-18.png](https://i.postimg.cc/jSKKF5kX/Screenshot-from-2025-02-13-17-05-18.png)](https://postimg.cc/0btL68vM)
[![Screenshot-from-2025-02-13-17-05-24.png](https://i.postimg.cc/V5QZ5JbH/Screenshot-from-2025-02-13-17-05-24.png)](https://postimg.cc/GTKx5hKk)
[![Screenshot-from-2025-02-13-17-05-29.png](https://i.postimg.cc/htRNt5LP/Screenshot-from-2025-02-13-17-05-29.png)](https://postimg.cc/xcg6sgpW)

## Features

-   **Predefined Tags** : Users can click on predefined tags to quickly test common inputs.
-   **Custom Input** : A textarea allows users to enter custom strings for calculation.
-   **Error Handling** : Displays meaningful error messages for invalid inputs (e.g., negative numbers, non-numeric values).
-   **Clear Functionality** : A "Clear" button resets the input field and results.
    Responsive Design : Built with modern UI components for a clean and responsive layout.

## Installation

#### Prerequisites

-   Node.js (v16 or higher)
-   npm
-   Git

#### Steps

1. Clone the repository:

```bash
git clone https://github.com/zehan12/Incubyte-Task-StringCalculator-TDD-Kata.git
```

2. Navigate to the project directory:

```bash
cd Incubyte-Task-StringCalculator-TDD-Kata
```

3. Install dependencies:

```bash
npm install
```

## Running the Application

To start the development server:

```bash
The application will be available at http://localhost:5173.
```

## Testing

The application uses Jest and React Testing Library for unit testing. To run the tests:

```bash
npm test
```

## Requirements

#### 1. Basic Functionality

-   **Empty String** : If the input string is empty (`""`), the method should return `0`.
-   **Single Number** : If the input contains a single number (e.g., `"1"`), the method should return that number.
-   **Two Numbers** : If the input contains two numbers separated by a comma (e.g., `"1,2"`), the method should return their sum.

#### 2. Unknown Amount of Numbers

-   Extend the method to handle an unknown amount of numbers separated by commas (e.g., `"1,2,3,4"`).

#### 3. Newlines as Delimiters

-   Allow the method to handle newlines (`\n`) as delimiters between numbers. For example:
    -   Input: `"1\n2,3"` → Output: `6`
    -   Invalid Input: `"1,\n"` (no need to test for invalid inputs in this kata).

#### 4. Custom Delimiters

-   Support custom delimiters specified at the beginning of the string in the format:
    ```bash
    //[delimiter]\n[numbers...]
    ```
    Example:
    -   Input: `"//;\n1;2"` → Output: `3`
    -   Default delimiter `,` should still work for all existing scenarios.

#### 5. Negative Numbers

-   Throw an exception if any negative numbers are passed. The exception message should include all negative numbers found.
    -   Example:
        -   Input: `"1,-2,-3"` → Exception: `"Negative numbers not allowed: -2, -3"`

#### 6. Ignore Large Numbers

-   Ignore numbers greater than `1000`. For example:
    -   Input: `"2,1001"` → Output: `2`

#### 7. Lengthy Delimiters

-   Allow delimiters of any length using the format:

    ```
    //[delimiter]\n[numbers...]
    ```

-   Example:
    -   Input: `"//[***]\n1***2***3"` → Output: `6`

#### 8. Multiple Delimiters

-   Support multiple delimiters using the format:
    ```
    //[delim1][delim2]\n[numbers...]
    ```
    -   Example:
        -   Input: `"//[*][%]\n1*2%3"` → Output: `6`
        -

#### 9. Multiple Delimiters with Length > 1

-   Extend support for multiple delimiters where each delimiter can have a length greater than one character.
    -   Example:
        -   Input: `"//[***][###]\n1***2###3"` → Output: `6`

## Approach

### Step-by-Step Instructions

#### 1. Start Simple :

-   Begin with the simplest test case: an empty string (`""`). Ensure the method returns `0`.
-   Move on to single-number inputs (e.g., `"1"`) and then two-number inputs (e.g., `"1,2"`).

#### 2. Incremental Development :

-   Gradually add functionality to handle more complex cases:
    -   Unknown amounts of numbers.
    -   Newlines as delimiters.
    -   Custom delimiters.
    -   Negative numbers.
    -   Ignoring large numbers.
    -   Lengthy and multiple delimiters.

#### 3. Test-Driven Development (TDD) :

-   Write tests before implementing functionality.
-   Ensure each test passes before moving to the next feature.
-   Refactor code after each passing test to improve readability and maintainability.

#### 4. Avoid Overcomplicating :

-   Solve problems as simply as possible. Avoid over-engineering solutions.
-   Focus on correctness and clarity rather than premature optimization.

#### 5. Stop When Needed :

-   If you're a beginner, stop after completing the first five requirements.
-   Advanced developers can continue to implement all features.

### Example Usage

```ts
import { StringCalculator } from "./core/StringCalculator";

console.log(StringCalculator.Add("")); // Output: 0
console.log(StringCalculator.Add("1")); // Output: 1
console.log(StringCalculator.Add("1,2")); // Output: 3
console.log(StringCalculator.Add("1,2,3,4")); // Output: 10
console.log(StringCalculator.Add("1\n2,3")); // Output: 6
console.log(StringCalculator.Add("//;\n1;2")); // Output: 3
console.log(StringCalculator.Add("//[***]\n1***2***3")); // Output: 6
console.log(StringCalculator.Add("//[*][%]\n1*2%3")); // Output: 6
```

### Testing

Use a testing framework like Jest to write unit tests for the StringCalculator class. Example test cases:

```ts
import { StringCalculator } from "../../core/StringCalculator";

describe("String Calculator", () => {
    describe("two numbers, separated by commas, and will return their sum", () => {
        test("should return 0 for an empty string", () => {
            expect(StringCalculator.Add("")).toBe(0);
        });

        test("should return the number itself for a single number", () => {
            expect(StringCalculator.Add("1")).toBe(1);
            expect(StringCalculator.Add("3")).toBe(3);
            expect(StringCalculator.Add("7")).toBe(7);
        });

        test("should handle two numbers separated by a comma", () => {
            expect(StringCalculator.Add("1,5")).toBe(6);
            expect(StringCalculator.Add("1,2")).toBe(3);
            expect(StringCalculator.Add("3,4")).toBe(7);
            expect(StringCalculator.Add("5,5")).toBe(10);
        });
    });

    describe("allow unknown amount of numbers", () => {
        test("should handle multiple numbers separated by comma", () => {
            expect(StringCalculator.Add("1, 2, 3, 4, 5")).toEqual(15);
            expect(StringCalculator.Add("4, 4, 4, 4, 4")).toEqual(20);
        });
    });

    describe("allow the Add method to handle new lines between numbers (instead of commas)", () => {
        test("should handle new lines between numbers", () => {
            expect(StringCalculator.Add("1\n2,3")).toBe(6);
            expect(StringCalculator.Add("1\n11\n111")).toBe(123);
        });

        test("should reject invalid inputs", () => {
            expect(() => StringCalculator.Add("1,\n")).toThrow(
                Error("Invalid input format.")
            );
        });
    });

    describe("allow support for different delimiters", () => {
        test("should handle custom delimiters", () => {
            expect(StringCalculator.Add("//;\n1;2")).toBe(3);
        });

        test("should handle default delimiter", () => {
            expect(StringCalculator.Add("1,2,3")).toBe(6);
            expect(StringCalculator.Add("1\n2,3")).toBe(6);
        });

        test("should reject inputs with custom delimiters", () => {
            expect(() => StringCalculator.Add("//;\n1;;2")).toThrow(
                Error("Invalid input format.")
            );
        });
    });

    describe("negative numbers are not allowed", () => {
        test("should handle single negative number", () => {
            expect(() => StringCalculator.Add("//;\n1;-2")).toThrow(
                Error("Negative numbers are not allowed.")
            );
            expect(() => StringCalculator.Add("1\n11\n-111")).toThrow(
                Error("Negative numbers are not allowed.")
            );
        });

        test("should handle multiple negative numbers", () => {
            expect(() => StringCalculator.Add("-1,-2,-3")).toThrow(
                Error("Negative numbers are not allowed: -1, -2, -3")
            );
        });
    });

    describe("ignore number bigger than 1000", () => {
        test("should handle number bigger than 1000", () => {
            expect(StringCalculator.Add("2,1001")).toBe(2);
            expect(StringCalculator.Add("2,1000")).toBe(1002);
            expect(StringCalculator.Add("1,2,3000")).toBe(3);
            expect(StringCalculator.Add("//;\n1000;2")).toBe(1002);
        });
    });

    describe("allow lengthy delimiter", () => {
        test("should handle lengthy delimiter", () => {
            expect(StringCalculator.Add("//[***]\n1***2***3")).toBe(6);
        });
    });

    describe("allow multiple delimiter", () => {
        test("should handle multiple delimiter", () => {
            expect(StringCalculator.Add("//[*][%]\n1*2%3")).toBe(6);
            expect(StringCalculator.Add("//[***][###]\n1***2###3")).toBe(6);
            expect(StringCalculator.Add("//[$$$][XXX]\n10$$$20XXX30")).toBe(60);
        });
    });

    describe("handle invalid inputs", () => {
        test("should reject non-numeric values", () => {
            expect(() => StringCalculator.Add("abc")).toThrow(
                Error("Invalid input: Non-numeric values found: abc")
            );
            expect(() => StringCalculator.Add("1,abc,3")).toThrow(
                Error("Invalid input: Non-numeric values found: abc")
            );
        });
    });

    describe("handle full coverage", () => {
        test("should handle missing newline after custom delimiter declaration", () => {
            expect(() => StringCalculator.Add("//;1;2")).toThrow(
                Error(
                    "Invalid input format: missing newline after delimiter declaration."
                )
            );
        });

        test("should reject empty custom delimiters", () => {
            expect(() => StringCalculator.Add("//[]\n1,2")).toThrow(
                Error("Invalid input format.")
            );
        });

        test("should reject malformed custom delimiter declarations", () => {
            expect(() => StringCalculator.Add("//[;\n1;2")).toThrow(
                Error("Invalid input: Non-numeric values found: 1;2")
            );
        });

        test("should handle excessive whitespace around numbers", () => {
            expect(StringCalculator.Add(" 1 , 2 , 3 ")).toBe(6);
        });

        test("should handle whitespace around custom delimiters", () => {
            expect(StringCalculator.Add("// ; \n 1 ; 2 ; 3 ")).toBe(6);
        });

        test("should handle mixed delimiters with whitespace", () => {
            expect(StringCalculator.Add("//[*][%]\n 1 * 2 % 3 ")).toBe(6);
        });

        test("should reject consecutive delimiters", () => {
            expect(() => StringCalculator.Add("1,,2")).toThrow(
                Error("Invalid input format.")
            );
            expect(() => StringCalculator.Add("//;\n1;;2")).toThrow(
                Error("Invalid input format.")
            );
        });
    });
});
```

### Acknowledgments

-   Built with ❤️ using React , TypeScript , and Shadcn UI .
-   Inspired by the String Calculator Kata .

### Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add YourFeatureName"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.
   Please ensure your code adheres to the existing style and includes appropriate tests.

For any questions or feedback, feel free to open an issue or contact the repository owner. Happy coding! 🚀
