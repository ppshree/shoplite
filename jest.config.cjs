/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    // Mock styles so importing "./App.css" doesn't break tests
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // If you use path aliases like "@/..."
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { tsconfig: 'tsconfig.test.json' } // use a test-specific tsconfig
    ],
  },
  testMatch: ['**/?(*.)+(test|spec).(ts|tsx)'],
};
