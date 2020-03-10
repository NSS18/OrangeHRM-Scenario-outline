package Com.OrangeHRMScnarioOtline;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {
    //creating object of homepage
    HomePage homePage=new HomePage();

    //pre condition
    @Given("User is on home page")
    public void user_is_on_home_page() {
        homePage.verifyUserIsOnLoginPage();
    }


    @When("I enter invalid username {string} or-and Invalid password {string}")
    public void i_enter_invalid_username_or_and_Invalid_password(String Username, String Password) {
        homePage.userEntersInvalidUsernameAndPassword(Username,Password);
    }

    @Then("I should able to see error message {string}")
    public void i_should_able_to_see_error_message(String expected_message) {
        homePage.loginUnsuccessful(expected_message);
    }


}
