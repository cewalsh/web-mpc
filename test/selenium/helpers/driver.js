/* eslint-env node, mocha */
const webDriver = require('selenium-webdriver');
const seleniumChrome = require('selenium-webdriver/chrome');
const chromDriver = require('chromedriver');
const { Builder } = require('selenium-webdriver')

var driver = null;

module.exports = {
  create: function () {
//     const execSync = require('child_process').execSync;

//      execSync("killall -KILL chromedriver", { encoding: 'utf-8' })
     
    
//     var service = new seleniumChrome.ServiceBuilder(chromDriver.path).build();
//     seleniumChrome.setDefaultService(service);

//     driver = new webDriver.Builder()
//       .forBrowser('chrome')
//       .withCapabilities(webDriver.Capabilities.chrome())
//       .setChromeOptions(new seleniumChrome.Options().setUserPreferences({
//         'profile.content_settings.exceptions.automatic_downloads.*.setting': 1,  // allow multiple file download chrome >74
//         'profile.default_content_setting_values.automatic_downloads': 1,  // allow multiple file download chrome >46
//         'profile.default_content_settings.multiple-automatic-downloads': 1,  // allow multiple file download chrome <46
//         'download.prompt_for_download': false
//       })
//       .addArguments('--remote-debugging-port=9222'))
//       .build();
    
    const chrome = require('selenium-webdriver/chrome')
    const options = new chrome.Options()

    options.addArguments('--disable-dev-shm-usage')
    options.addArguments('--no-sandbox')
    options.addArguments('--headless')

    const driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build()

    return driver;
  },
  quit: function () {
    driver.quit();
  },
  getDriver: function () {
    return driver;
  }
};
