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

            const startBracket = start.indexOf("[");
            const endBracket = start.indexOf("]");
            if (
                startBracket !== -1 &&
                endBracket !== -1 &&
                startBracket < endBracket
            ) {
                delimiter = start.substring(startBracket + 1, endBracket);
            } else {
                delimiter = start.substring(2);
            }
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
            .filter((n) => !isNaN(n) && n <= 1000);

        const negatives = parsedNumbers.filter((n) => n < 0);
        if (negatives.length > 0) {
            if (negatives.length === 1) {
                throw new Error("negative not allowed");
            }
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }

        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}
