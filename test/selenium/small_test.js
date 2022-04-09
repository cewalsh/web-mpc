const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
       //To wait for browser to build and launch properly
       WebDriverManager.chromedriver().setup();
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--no-sandbox");
            chromeOptions.addArguments("--headless");
            chromeOptions.addArguments("disable-gpu");
//          chromeOptions.addArguments("window-size=1400,2100"); // Linux should be activate
            driver = new ChromeDriver(chromeOptions);
 
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
