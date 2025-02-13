import { Config } from "jest";

const config: Config = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/hooks/*.{ts,tsx}",
        "!src/**/lib/*.{ts,tsx}",
        "!src/**/components/ui/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!**/vendor/**",
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        ".(ts|tsx)": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
        "^.+\\.svg$": "jest-transformer-svg",
    },
    coverageReporters: ["json-summary", "clover", "text"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage",
        "package.json",
        "package-lock.json",
        "pnpm-lock.json",
        "yarn-lock.json",
        "jest.setup.ts",
    ],
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.ts",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};

module.exports = config;
