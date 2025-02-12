export class StringCalculator {
    static Add(numbers: string): number {
        if (numbers.trim() === "") {
            return 0;
        }

        if (numbers.length === 1 && !isNaN(+numbers)) {
            return +numbers
        }

        return 0;
    }
}
