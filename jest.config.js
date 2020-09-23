module.exports = {
	clearMocks: true,
	verbose: true,
	coverageDirectory: "src/tests/coverage",
	roots: ["<rootDir>/src"],
	moduleDirectories: ["src", "node_modules"],
	setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
	testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			diagnostics: false,
		},
	},
};
