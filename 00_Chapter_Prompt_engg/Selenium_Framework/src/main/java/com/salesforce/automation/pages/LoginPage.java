package com.salesforce.automation.pages;

import com.salesforce.automation.config.ConfigReader;
import com.salesforce.automation.exceptions.FrameworkException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']") private WebElement username;
    @FindBy(xpath = "//input[@id='password']") private WebElement password;
    @FindBy(xpath = "//input[@id='rememberUn']") private WebElement rememberUsername;
    @FindBy(xpath = "//input[@id='Login']") private WebElement loginButton;
    @FindBy(xpath = "//div[@id='error']") private WebElement loginError;
    @FindBy(xpath = "//a[contains(normalize-space(),'Forgot Your Password?')]") private WebElement forgotPasswordLink;

    public LoginPage(WebDriver driver) {
        try {
            this.driver = driver;
            this.wait = new WebDriverWait(driver, Duration.ofSeconds(ConfigReader.getWaitSeconds()));
            PageFactory.initElements(driver, this);
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to initialize LoginPage", exception);
        }
    }

    public LoginPage open() {
        try {
            driver.get(ConfigReader.get("baseUrl"));
            wait.until(ExpectedConditions.visibilityOf(username));
            return this;
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to open Salesforce login page", exception);
        }
    }

    public LoginPage enterUsername(String value) {
        try {
            wait.until(ExpectedConditions.visibilityOf(username)).clear();
            username.sendKeys(value);
            return this;
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to enter username", exception);
        }
    }

    public LoginPage enterPassword(String value) {
        try {
            wait.until(ExpectedConditions.visibilityOf(password)).clear();
            password.sendKeys(value);
            return this;
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to enter password", exception);
        }
    }

    public LoginPage selectRememberUsername() {
        try {
            if (!rememberUsername.isSelected()) {
                wait.until(ExpectedConditions.elementToBeClickable(rememberUsername)).click();
            }
            return this;
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to select remember username", exception);
        }
    }

    public void clickLogin() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to click login button", exception);
        }
    }

    public void login(String user, String pass) {
        enterUsername(user).enterPassword(pass).clickLogin();
    }

    public String getLoginError() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginError)).getText();
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to read login error", exception);
        }
    }

    public boolean isLoginButtonDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginButton)).isDisplayed();
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to verify login button", exception);
        }
    }

    public boolean isRememberUsernameSelected() {
        try {
            return rememberUsername.isSelected();
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to verify remember username", exception);
        }
    }

    public boolean isForgotPasswordDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(forgotPasswordLink)).isDisplayed();
        } catch (RuntimeException exception) {
            throw new FrameworkException("Unable to verify forgot password link", exception);
        }
    }
}
