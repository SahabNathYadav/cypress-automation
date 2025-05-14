const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //entire project timeout to 6 sec. which verrided the cypress timeout setting
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/cypress-basics/**.js"
    //specPattern: "cypress/e2e/**/**.js"
  },
});
