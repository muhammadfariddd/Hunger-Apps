const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.test.cjs',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
      windowSize: '1200x900',
      waitForTimeout: 5000,
      waitForAction: 500,
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }
  },
  include: {
    I: './steps_file.cjs'
  },
  name: 'restaurant-apps'
};