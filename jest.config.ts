import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Path to the Next.js app — loads next.config.mjs and .env files
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Runs after the test framework is installed in the environment
  // Imports @testing-library/jest-dom matchers for all tests
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  // Allow Jest to transform these ESM-only packages
  transformIgnorePatterns: [
    '/node_modules/(?!(framer-motion|lenis)/).*/',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/data/**',
  ],
};

// createJestConfig merges Next.js defaults: SWC transform, CSS/image mocks, etc.
export default createJestConfig(config);
