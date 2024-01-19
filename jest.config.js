/** @type {import('ts-jest/dist/types').JestConfigWithTsJest } */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
	preset: 'ts-jest/presets/js-with-ts',
	runner: 'jest-electron/runner',
	testEnvironment: 'jest-electron/environment',
	setupFilesAfterEnv: [
			'jest-extended/all',
	],
};
