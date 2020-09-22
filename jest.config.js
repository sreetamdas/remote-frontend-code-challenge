module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	roots: ["<rootDir>/src"],
	moduleDirectories: ["src", "node_modules"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			diagnostics: false,
		},
	},
};
