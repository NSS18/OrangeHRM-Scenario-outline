package Com.OrangeHRMScnarioOtline;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends BasePage {
    //set up browser method to select browser
    public  void SetUpBrowser() {
        //object of load propertied class
        LoadProp loadProp=new LoadProp();
        //To get browser from testconfig.properties file
        String browser=loadProp.getProperty("browser");
        //To print browser name
        System.out.println("We are using-----> "+browser+" browser");

        //To open chrome browser
        if(browser.equalsIgnoreCase("chrome"))
        {
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\BrowserDrivers\\chromedriver.exe");
            driver = new ChromeDriver();

        }

        // To open firefox browser
        else if(browser.equalsIgnoreCase("firefox"))
        {
            System.setProperty("webdriver.gecko.driver","src\\test\\Resources\\BrowserDrivers\\geckodriver.exe");
            driver = new FirefoxDriver();
        }

        // To open edge browser
        else if(browser.equalsIgnoreCase("edge"))
        {
            driver = new EdgeDriver();
        }

        // To open IE browser
        else if(browser.equalsIgnoreCase("IE"))
        {
            System.setProperty("webdriver.ie.driver","src\\test\\Resources\\BrowserDrivers\\IEDriverServer.exe");
            DesiredCapabilities ieCapabilities = DesiredCapabilities.internetExplorer();

            ieCapabilities.setCapability("nativeEvents",false);
            ieCapabilities.setCapability("unexpectedAlertBehaviour","accept");
            ieCapabilities.setCapability("ignoreProtectedModeSettings","True");
            ieCapabilities.setCapability("disable-popup-blocking","True");
            ieCapabilities.setCapability("enablePersistentHover","True");
            ieCapabilities.setCapability(InternetExplorerDriver.IE_SWITCHES,"-private");
            ieCapabilities.setCapability("requiredWindowFocus","false");

            driver = new InternetExplorerDriver();
                   }

        //if mentioned browser is not present in the config file
        else
            System.out.println("No matching browser "+browser);

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
    }



    //To close browser
    public void closeBrowser()
    {
        driver.quit();
    }
}


