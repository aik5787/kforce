const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kforce.com/",
    viewportWidth: 1410,
    viewportHeight: 1210,
  },
});
