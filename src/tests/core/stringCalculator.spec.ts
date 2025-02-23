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
            expect(StringCalculator.Add("//*\n2*3")).toBe(6);
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
