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

});
