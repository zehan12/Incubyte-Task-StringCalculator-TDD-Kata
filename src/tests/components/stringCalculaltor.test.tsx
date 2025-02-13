import { render, screen } from "@testing-library/react";
import { StringCalculatorComponent } from "../../components/StringCalculator/index";
import "@testing-library/jest-dom";

describe("String Calculator Component", () => {
    describe("Rendering", () => {
        test("should render the component with all predefined tags", () => {
            render(<StringCalculatorComponent />);

            expect(screen.getByText("String Calculator")).toBeInTheDocument();
            expect(
                screen.getByText(
                    "Enter numbers separated by commas, newlines, or custom delimiters"
                )
            ).toBeInTheDocument();

            const predefinedTags = [
                "1,2,3",
                "4\n5\n6",
                "//;\n7;8;9",
                "//[***]\n10***11***12",
                "-1,-2,-3",
                "//[$$$][XXX]\n10$$$20XXX30",
                "2,1001",
            ];

            predefinedTags.forEach((tag) => {
                const matcher = (content: string, _element: Element | null) =>
                    content.includes(tag.replace(/\n/g, " "));
                expect(screen.getByText(matcher)).toBeInTheDocument();
            });

            expect(screen.getByText("clear")).toBeInTheDocument();
    
            expect(screen.getByText("Calculate")).toBeInTheDocument();
        });
    });
});