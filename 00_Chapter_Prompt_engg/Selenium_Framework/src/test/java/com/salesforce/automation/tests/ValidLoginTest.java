package com.salesforce.automation.tests;

import com.salesforce.automation.driver.DriverFactory;
import com.salesforce.automation.exceptions.FrameworkException;
import com.salesforce.automation.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ValidLoginTest extends BaseTest {
    private LoginPage loginPage;

    @BeforeMethod(alwaysRun = true)
    public void prepareLoginPage() {
        loginPage = new LoginPage(DriverFactory.getDriver()).open();
    }

    @Test(description = "Verify login page controls and remember username functionality")
    public void verifyLoginPageControls() {
        try {
            Assert.assertTrue(loginPage.isLoginButtonDisplayed());
            Assert.assertTrue(loginPage.isForgotPasswordDisplayed());
            loginPage.selectRememberUsername();
            Assert.assertTrue(loginPage.isRememberUsernameSelected());
        } catch (FrameworkException exception) {
            Assert.fail("Login page control verification failed", exception);
        }
    }

    @Test(description = "Verify valid Salesforce login submission")
    public void verifyValidLogin() {
        try {
            String username = System.getProperty("salesforce.username");
            String password = System.getProperty("salesforce.password");
            Assert.assertTrue(username != null && !username.isBlank(), "salesforce.username system property is required");
            Assert.assertTrue(password != null && !password.isBlank(), "salesforce.password system property is required");
            loginPage.login(username, password);
            Assert.assertFalse(DriverFactory.getDriver().getCurrentUrl().contains("login.salesforce.com"), "Valid login did not navigate away from login page");
        } catch (FrameworkException exception) {
            Assert.fail("Valid login verification failed", exception);
        }
    }
}
