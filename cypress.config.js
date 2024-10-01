const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        sleep: async (time) => {
          await new Promise(resolve => setTimeout(resolve, time));
          return null;
        }
      });

      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        printLogsToConsole: "always",
      });

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
  env: {
    BASE_URL: '',
    EMAIL: '',
    PASSWORD: '',
  },
  screenshotsFolder: "cypress-tests/screenshots",
  video: true,
  videosFolder: "cypress-tests/videos",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFilename: "[status]_[datetime]-[name]-report",
    reportDir: "cypress-tests/reports/html",
    showSkipped: true,
    showHooks: "always",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    timestamp: "dddd, mmmm dS, yyyy, h:MM:ss TT",
    reportPageTitle: "customer-report",
  },
});
