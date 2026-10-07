package com.salesforce.automation.listeners;

import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;

public class Analyzer implements IRetryAnalyzer {
    private static final int MAX_RETRY_COUNT = 1;
    private int retryCount;

    @Override
    public boolean retry(ITestResult result) {
        if (result == null || !isRetryable(result.getThrowable())) {
            return false;
        }
        if (retryCount < MAX_RETRY_COUNT) {
            retryCount++;
            return true;
        }
        return false;
    }

    private boolean isRetryable(Throwable throwable) {
        return throwable != null && !(throwable instanceof AssertionError);
    }
}
