Feature: By a product

Scenario: Buy a product
    Given the user is on the Saucelabs page "https://www.saucedemo.com/"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user add to cart "Sauce Labs Backpack"
    And the user clicks on the cart
    Then the user should see "Sauce Labs Backpack" product on the cart
