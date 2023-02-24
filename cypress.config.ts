const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    /* 
    If you have a front-end service in this project, plz set the baseUrl.
    This will automatically prefix cy.visit() and cy.request() commands with this baseUrl.
    */
    // baseUrl: 'http://localhost:{port}', 
  },
});
