module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/main.tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js",
    // Mocka tsparticles (ESM puro, incompatível com ts-jest)
    "^@tsparticles/(.*)$": "<rootDir>/src/__mocks__/tsparticlesMock.js",
    "^tsparticles(.*)$": "<rootDir>/src/__mocks__/tsparticlesMock.js",
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx",
        esModuleInterop: true,
        types: ["jest", "@testing-library/jest-dom", "node"],
      },
    },
  },
};
