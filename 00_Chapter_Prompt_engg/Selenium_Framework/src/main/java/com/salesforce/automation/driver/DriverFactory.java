package com.salesforce.automation.driver;

import com.salesforce.automation.config.ConfigReader;
import com.salesforce.automation.exceptions.FrameworkException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public final class DriverFactory {
    private static final ThreadLocal<WebDriver> DRIVER = new ThreadLocal<>();

    private DriverFactory() { }

    public static void initializeDriver() {
        try {
            if (!ConfigReader.get("browser").equalsIgnoreCase("chrome")) {
                throw new FrameworkException("Unsupported browser: " + ConfigReader.get("browser"), null);
            }
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            DRIVER.set(new ChromeDriver(options));
        } catch (RuntimeException exception) {
            quitDriver();
            throw new FrameworkException("Unable to initialize WebDriver", exception);
        }
    }

    public static WebDriver getDriver() {
        WebDriver driver = DRIVER.get();
        if (driver == null) {
            throw new FrameworkException("WebDriver is not initialized", null);
        }
        return driver;
    }

    public static void quitDriver() {
        WebDriver driver = DRIVER.get();
        if (driver != null) {
            try {
                driver.quit();
            } finally {
                DRIVER.remove();
            }
        }
    }
}
