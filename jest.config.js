// /**
//  * For a detailed explanation regarding each configuration property, visit:
//  * https://jestjs.io/docs/configuration
//  */

// /** @type {import('jest').Config} */
// const config = {
//   testMatch: [
//     '**/tests/**/*.test.[jt]s?(x)',
//   ],

//   // The paths to modules that run some code to configure or set up the testing environment before each test
//   setupFiles: ['fake-indexeddb/auto'],

//   // The test environment that will be used for testing
//   testEnvironment: 'jsdom',

//   // A map from regular expressions to paths to transformers
//   transform: {
//     '^.+\\.(js|ts)$': 'babel-jest',
//   },
// };

// module.exports = config;
module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./src/scripts/tests/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/scripts/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/scripts/tests/__mocks__/styleMock.js',
  },
};
