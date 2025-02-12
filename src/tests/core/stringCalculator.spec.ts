import { StringCalculator } from "../../core/StringCalculator";

describe("String Calculator", () => {

    describe("two numbers, separated by commas, and will return their sum", () => {

        test("should return 0 for an empty string", () => {
            expect(StringCalculator.Add("")).toBe(0);
        });

    });

});
