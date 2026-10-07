package com.salesforce.automation.tests;

import com.salesforce.automation.driver.DriverFactory;
import com.salesforce.automation.exceptions.FrameworkException;
import com.salesforce.automation.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {
    private LoginPage loginPage;

    @BeforeMethod(alwaysRun = true)
    public void prepareLoginPage() {
        loginPage = new LoginPage(DriverFactory.getDriver()).open();
    }

    @DataProvider(name = "invalidCredentials")
    public Object[][] invalidCredentials() {
        return new Object[][]{{"invalid-user@example.com", "invalid-password"}, {"unknown-user@example.com", "incorrect-password"}};
    }

    @Test(dataProvider = "invalidCredentials", description = "Verify invalid credentials show a login error")
    public void verifyInvalidLogin(String username, String password) {
        try {
            loginPage.login(username, password);
            String error = loginPage.getLoginError();
            Assert.assertTrue(error.toLowerCase().contains("check your username and password"), "Unexpected login error: " + error);
            Assert.assertTrue(DriverFactory.getDriver().getCurrentUrl().contains("login.salesforce.com"));
        } catch (FrameworkException exception) {
            Assert.fail("Invalid login verification failed", exception);
        }
    }
}
