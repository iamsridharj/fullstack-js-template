/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@design-system/ui-kit': '<rootDir>/src/design-system/components',
    '^@design-system/typography':
      '<rootDir>/src/design-system/foundation/typography/typography',
    '@design-system/utils': '<rootDir>/src/utils',
    '@design-system/assets/(.*)$': '<rootDir>/src/design-system/assets/$1',
    '@design-system/breakpoints':
      '<rootDir>/src/design-system/foundation/breakpoints',
    '@design-system/ui-kit/types':
      '<rootDir>/src/design-system/components/types.d.ts',
  },
}
