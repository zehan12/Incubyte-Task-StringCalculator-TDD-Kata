import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
    test("renders the button with correct label", () => {
        render(<App />);
        const buttonElement = screen.getByText(/Click/i);
        expect(buttonElement).toBeDefined();
    });

    test("button click triggers alert with correct message", () => {
        jest.spyOn(window, "alert").mockImplementation(() => { });

        render(<App />);
        const buttonElement = screen.getByText(/Click/i);
        fireEvent.click(buttonElement);
        expect(window.alert).toHaveBeenCalledWith("You have clicked the button!");

        (window.alert as jest.Mock).mockRestore();
    });
});