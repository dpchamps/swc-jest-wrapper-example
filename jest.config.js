/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transform: {
    "^.+\\.[tj]sx?$": [
      "./wrap-swc-transformer.js",
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: "typescript",
          },
          transform: {},
          target: "es5",
        },
      },
    ],
  }
};
