export default {
  testEnvironment: 'jsdom',
  setupFiles: ['./src/scripts/tests/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/scripts/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/scripts/tests/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/tests/**/*.test.js'],
  verbose: true,
};