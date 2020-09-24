module.exports = {
	clearMocks: true,
	verbose: true,
	coverageDirectory: "src/tests/coverage",
	roots: ["<rootDir>/src"],
	moduleDirectories: ["src", "node_modules"],
	setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
	testMatch: ["**/?(*.)+(test).+(ts|tsx)"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			diagnostics: false,
			tsConfig: "src/tests/tsconfig.jest.json",
		},
	},
};
