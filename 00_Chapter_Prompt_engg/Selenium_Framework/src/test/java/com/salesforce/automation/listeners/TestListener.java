package com.salesforce.automation.listeners;

import com.salesforce.automation.driver.DriverFactory;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {
    @Override
    public void onTestFailure(ITestResult result) {
        if (result == null || result.getInstance() == null) {
            return;
        }
        try {
            if (DriverFactory.getDriver() != null) {
                result.setAttribute("failedTestUrl", DriverFactory.getDriver().getCurrentUrl());
            }
        } catch (RuntimeException ignored) {
            result.setAttribute("failedTestUrl", "unavailable");
        }
    }

    @Override
    public void onStart(ITestContext context) { }

    @Override
    public void onFinish(ITestContext context) { }

    @Override
    public void onTestStart(ITestResult result) { }

    @Override
    public void onTestSuccess(ITestResult result) { }

    @Override
    public void onTestSkipped(ITestResult result) { }

    @Override
    public void onTestFailedButWithinSuccessPercentage(ITestResult result) { }
}
