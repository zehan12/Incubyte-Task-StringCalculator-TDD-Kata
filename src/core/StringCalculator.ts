export class StringCalculator {
    static Add(numbers: string): number {
        if (!numbers.trim()) {
            return 0;
        }

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n", 2);
            if (parts.length < 2) {
                throw new Error(
                    "Invalid input format: missing newline after delimiter declaration."
                );
            }
            const [delimiterSection, remainingNumbers] = parts;
            numbers = remainingNumbers;

            if (delimiterSection.startsWith("//[")) {
                // Handle custom delimiters enclosed in brackets
                const delimiters = [];
                let startBracket = delimiterSection.indexOf("[");
                while (startBracket !== -1) {
                    const endBracket = delimiterSection.indexOf(
                        "]",
                        startBracket
                    );
                    if (endBracket === -1) break;
                    const customDelimiter = delimiterSection.substring(
                        startBracket + 1,
                        endBracket
                    );
                    delimiters.push(customDelimiter);
                    startBracket = delimiterSection.indexOf("[", endBracket);
                }
                delimiters.forEach((customDelimiter) => {
                    numbers = numbers.split(customDelimiter).join(",");
                });
                delimiter = ",";
            } else if (delimiterSection.length > 2) {
                // Handle single-character custom delimiters
                delimiter = delimiterSection.substring(2);
            }
        }

        numbers = numbers.replace(/\n/g, delimiter);

        if (
            numbers.startsWith(delimiter) ||
            numbers.endsWith(delimiter) ||
            numbers.includes(`${delimiter}${delimiter}`)
        ) {
            throw new Error("Invalid input format.");
        }

        const numArray = numbers.split(delimiter).map((num) => num.trim());
        const invalidEntries = numArray.filter((n) => n && isNaN(Number(n)));

        if (invalidEntries.length > 0) {
            throw new Error(
                `Invalid input: Non-numeric values found: ${invalidEntries.join(
                    ", "
                )}`
            );
        }

        const parsedNumbers = numArray
            .map(Number)
            .filter((n) => !isNaN(n) && n <= 1000);

        const negatives = parsedNumbers.filter((n) => n < 0);
        if (negatives.length > 0) {
            if (negatives.length === 1) {
                throw new Error("Negative numbers are not allowed.");
            }
            throw new Error(
                `Negative numbers are not allowed: ${negatives.join(", ")}`
            );
        }

        if (delimiter === "*") {
            return parsedNumbers.reduce((acc, num) => acc * num, 1);
        }
        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}
