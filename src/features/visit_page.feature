Feature: Open the Saucedemo homepage

  Scenario: Navigate to the Saucedemo homepage
    Given the user opens the browser
    When the user navigates to "https://www.saucedemo.com"
    Then the user sees the login form