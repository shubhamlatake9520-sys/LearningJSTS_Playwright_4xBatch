package com.salesforce.automation.config;

import com.salesforce.automation.exceptions.FrameworkException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public final class ConfigReader {
    private static final Properties PROPERTIES = loadProperties();

    private ConfigReader() { }

    private static Properties loadProperties() {
        try (InputStream input = ConfigReader.class.getClassLoader().getResourceAsStream("config.properties")) {
            if (input == null) {
                throw new FrameworkException("config.properties was not found", null);
            }
            Properties properties = new Properties();
            properties.load(input);
            return properties;
        } catch (IOException exception) {
            throw new FrameworkException("Unable to load configuration", exception);
        }
    }

    public static String get(String key) {
        String value = PROPERTIES.getProperty(key);
        if (value == null || value.isBlank()) {
            throw new FrameworkException("Missing configuration key: " + key, null);
        }
        return value.trim();
    }

    public static long getWaitSeconds() {
        return Long.parseLong(get("explicitWaitSeconds"));
    }
}
