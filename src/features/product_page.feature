Feature: Product page content
    Background:     
        Given the user is on the Saucelabs page "https://www.saucedemo.com/"
        When the user is logged in with username "standard_user" and password "secret_sauce"
        And the user navigates to the "https://www.saucedemo.com/inventory.html" page

    Scenario: The user see the product list
        Then the user should see the primary header
        And the user should see the secondary header
        And the user should see the product list
        And the user should see the footer

    Scenario: Check that 6 items are displayed in the inventory list
        Then the user should see 6 items in the inventory list