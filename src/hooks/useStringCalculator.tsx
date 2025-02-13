import { StringCalculator } from "../core/StringCalculator";
import { useState } from "react";

export const useStringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        try {
            const sum = StringCalculator.Add(input);
            setResult(sum);
            setError(null);
        } catch (err) {
            setResult(null);
            setError((err as Error).message);
        }
    };

    const handleClearInput = () => {
        setInput("");
        setResult(null);
        setError(null);
    }

    return { input, setInput, result, error, handleCalculate, handleClearInput };
};