module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@configs/(.*)$': '<rootDir>/src/configs/$1',
      '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
      '^@models/(.*)$': '<rootDir>/src/models/$1',
      '^@routes/(.*)$': '<rootDir>/src/routes/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    },
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js'],
    coverageDirectory: './coverage',
    collectCoverageFrom: [
      'src/**/*.ts',
      '!src/**/*.d.ts',
      '!src/**/index.ts'
    ]
  };
  