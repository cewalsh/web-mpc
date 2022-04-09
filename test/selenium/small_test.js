// const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
      var webdriver = require("selenium-webdriver");
      var chrome = require("selenium-webdriver/chrome");

/** 
 * Set chrome command line options/switches
*/      
      var chromeOptions = new chrome.Options();
      chromeOptions.addArguments("--no-sandbox");
      chromeOptions.addArguments("test-type");
      chromeOptions.addArguments("start-maximized");
      chromeOptions.addArguments("--js-flags=--expose-gc");
      chromeOptions.addArguments("--enable-precise-memory-info");
      chromeOptions.addArguments("--disable-popup-blocking");
      chromeOptions.addArguments("--disable-default-apps");
      chromeOptions.addArguments("--disable-infobars");

driver = new webdriver.Builder()
             .forBrowser("chrome")
             .setChromeOptions(chromeOptions)
             .build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://google.com");
            
        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}
 
example()
