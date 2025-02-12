export class StringCalculator {
    static Add(numbers: string): number {
        if (!numbers.trim()) {
            return 0;
        }

        let delimiter = ",";

        if (numbers.startsWith("//")) {
            const expression = numbers.split("\n", 2);
            const start = expression[0];
            numbers = expression[1];
            delimiter = start.substring(2);
        }

        numbers = numbers.replace(/\n/g, delimiter);

        if (
            numbers.startsWith(delimiter) ||
            numbers.endsWith(delimiter) ||
            numbers.includes(`${delimiter}${delimiter}`)
        ) {
            throw new Error("Invalid input.");
        }

        const parsedNumbers = numbers
            .split(delimiter)
            .map(Number)
            .filter((n) => !isNaN(n));
        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}
