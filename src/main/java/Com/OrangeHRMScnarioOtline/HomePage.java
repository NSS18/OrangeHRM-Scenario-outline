package Com.OrangeHRMScnarioOtline;

import org.junit.Assert;
import org.openqa.selenium.By;

public class HomePage extends Utils {

    //locator for user name
    private By _username = By.id("txtUsername");
    //locator for password
    private By _password = By.id("txtPassword");
    //locator for login
    private By _clicklogin = By.id("btnLogin");
    //locator for unsuccessful error message
    private By _errorMessage = By.id("spanMessage");

    //To verify user is on login page
    public void verifyUserIsOnLoginPage() {
        assertURL("/index.php/auth/login");
    }

    //To enter username and password
    public void userEntersInvalidUsernameAndPassword(String Username, String Password) {
        enterText(_username, Username);
        enterText(_password, Password);
        clickOnElement(_clicklogin);
    }

    //To compare actual and expected error message
    public void loginUnsuccessful(String expected_message) {
        assertTextMessage("Login is unsuccessful",expected_message, _errorMessage);

    }
}