export const Add = (numbers: string): number => {
    console.log(numbers)
    return 0
};


describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
        expect(Add("")).toBe(0);
    });

});
