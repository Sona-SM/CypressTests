const { defineConfig } = require("cypress");
// const dotenvPlugin = require('cypress-dotenv');
require('dotenv').config()


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // config = dotenvPlugin(config)
      // return config
    },
    baseUrl: 'https://parabank.parasoft.com/parabank/register.htm',
    env: {
    globalUrl:process.env.GLOBAL_URL
    }
  },
});
