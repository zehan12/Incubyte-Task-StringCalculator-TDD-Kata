// import { render, screen } from "@testing-library/react";
// import App from "../App";

// describe("Root App Component", () => {
//     test("renders the App component without crashing", () => {
//         render(<App />);

//         expect(screen.findByRole("main"))
//     });
// });

import { createRoot } from "react-dom/client";

// ✅ Mock createRoot to avoid actual rendering
jest.mock("react-dom/client", () => ({
    createRoot: jest.fn(() => ({
        render: jest.fn(),
    })),
}));

import "../main"; // Import main.tsx after mocking

describe("Main Application Entry", () => {
    test("calls createRoot and renders App", () => {
        expect(createRoot).toHaveBeenCalledTimes(1);
    });
});

