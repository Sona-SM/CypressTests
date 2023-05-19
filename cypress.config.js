const { defineConfig } = require("cypress");
const cucumber =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
  require('dotenv').config()
module.exports = defineConfig({
  e2e: {
        
        async setupNodeEvents(on, config) {
        const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
        });
        on("file:preprocessor", bundler);
        await cucumber(on, config);
        
        return config;
        },
        specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    },
    env: {
      globalUrl:process.env.GLOBAL_URL,
      localUrl:process.env.LOCAL_URL
    },
});

