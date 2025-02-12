import "../main";
import { createRoot } from "react-dom/client";

jest.mock("react-dom/client", () => ({
    createRoot: jest.fn(() => ({
        render: jest.fn(),
    })),
}));

describe("Main Application Entry", () => {
    test("calls createRoot and renders App", () => {
        expect(createRoot).toHaveBeenCalledTimes(1);
    });
});

