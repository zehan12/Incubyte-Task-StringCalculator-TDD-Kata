export class StringCalculator {
    static Add(numbers: string): number {
        // Handle empty string
        if (numbers.trim() === "") {
            return 0;
        }

        // Handle single string number
        if (numbers.length === 1 && !isNaN(+numbers)) {
            return +numbers;
        }

        // Handle comma separated string number
        if (numbers.length > 1 && numbers.includes(",") ) {
            const splitNumbers = numbers.split(",");
            const sum = splitNumbers
                .map(Number)
                .reduce((acc, cv) => (acc += cv), 0);
            return sum;
        }

        return 0;
    }
}
