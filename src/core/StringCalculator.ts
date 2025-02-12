export class StringCalculator {
    static Add(numbers: string): number {
        if (!numbers.trim()) {
            return 0;
        }

        numbers = numbers.replace(/\n/g, ',');

        const parsedNumbers = numbers
            .split(",")
            .map(Number)
            .filter((n) => !isNaN(n));
        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}
