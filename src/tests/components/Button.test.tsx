import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../../components/button/Button";

describe("Button Component", () => {
    it("renders the button with the provided label", () => {
        const label = "Click Me";
        render(<Button label={label} onClick={() => {}} />);

        const button = screen.getByRole("button");
        expect(button).toHaveTextContent(label)
    });

    it("calls onClick function when clicked", () => {
        const handleClick = jest.fn();
        const label = "Click Me";

        render(<Button label={label} onClick={handleClick} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
