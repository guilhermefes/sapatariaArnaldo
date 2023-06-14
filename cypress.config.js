const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cy.visit('https://127.0.0.1:5500')
      // implement node event listeners here
    },
  },
}); 
