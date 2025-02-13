import { MadeWithLove } from "../social/MadeWithLove";
import { SocialLinks } from "../social/SocialLink";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { useStringCalculator } from "@/hooks/useStringCalculator";

export const StringCalculatorComponent = () => {
    const {
        input,
        setInput,
        result,
        error,
        handleCalculate,
        handleClearInput
    } = useStringCalculator()



    const predefinedTags = [
        "1,2,3",
        "4\n5\n6",
        "//;\n7;8;9",
        "//[***]\n10***11***12",
        "abc",
        "-1,-2,-3",
        "//[$$$][XXX]\n10$$$20XXX30",
        "2,1001"
    ];

    const addTagToInput = (tag: string) => {
        setInput((prevInput) => {
            const newInput = prevInput.trim() ? `${prevInput}\n${tag}` : tag;
            return newInput;
        });
    };


    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <img className="h-6" src="/favicon.png" alt="logo" />
                    String Calculator
                </CardTitle>
                <CardDescription>
                    Enter numbers separated by commas, newlines, or custom delimiters
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2 py-2">
                    {predefinedTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => addTagToInput(tag)}
                            className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 cursor-pointer"
                        >
                            {tag}
                        </button>
                    ))}
                    <button
                        onClick={handleClearInput}
                        className="px-3 py-1 text-xs bg-red-600 text-white rounded-lg hover:bg-red-600/90 cursor-pointer"
                    >
                        clear
                    </button>
                </div>
                <div className="space-y-4">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., 1,2,3 or //;\n1;2;3"
                        rows={5}
                        className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5468FF] border border-gray-300"
                    />
                    <Button onClick={handleCalculate} className="w-full bg-[#5468FF] hover:bg-[#4b5eee]">
                        Calculate
                    </Button>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col">
                {result !== null && (
                    <div className="w-full bg-green-100 text-green-800 p-4 rounded-lg shadow-sm flex items-center gap-2">
                        <span className="font-medium">Result:</span> {result}
                    </div>
                )}
                {error && (
                    <div className="w-full bg-red-100 text-red-800 p-4 text-sm rounded-lg shadow-sm flex items-center gap-2">
                        <span className="font-medium">Error:{"  "}{error}</span>
                    </div>
                )}
                <div className="pt-5 -mb-3 flex items-center text-zinc-800 font-normal">
                    <img className="h-14" src="/incubyte.webp" alt="company logo" />
                </div>
                <SocialLinks />
                <MadeWithLove />
            </CardFooter>
        </Card>
    );
};