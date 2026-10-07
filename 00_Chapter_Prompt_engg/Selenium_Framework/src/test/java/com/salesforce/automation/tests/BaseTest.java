package com.salesforce.automation.tests;

import com.salesforce.automation.driver.DriverFactory;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public abstract class BaseTest {
    @BeforeTest(alwaysRun = true)
    public void setUp() {
        DriverFactory.initializeDriver();
    }

    @AfterTest(alwaysRun = true)
    public void tearDown() {
        DriverFactory.quitDriver();
    }
}
