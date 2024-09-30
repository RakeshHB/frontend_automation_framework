const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "./cypress-tests/reports/html",
    charts: true,
    reportPageTitle: "price-change-ui-automation-test-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "mm dd yyyy h-MM-ss TT Z",
    showHooks: "always",
    showSkipped: true,
    showPending: true,
    showFailed: true,
    showPassed: true,
    code: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: './cypress-tests/screenshots',
  pageLoadTimeout: 70000,
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 70000,
  videosFolder: './cypress-tests/videos',
  videoCompression: false,
  requestTimeout: 15000,
  video: true,
  env: {
    BASE_URL: '',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        hello: async ({ greeting, name }) => {
          let val = await new Promise((resolve) => setTimeout(resolve, 2000));
          val = null;
          return null
        },
      })

      require('cypress-terminal-report/src/installLogsPrinter')(on, {
            printLogsToConsole: 'always',
          }
      )
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
