Feature: By a product

Background:
    Given the user is on the Saucelabs page "https://www.saucedemo.com/"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user add to cart "Sauce Labs Backpack"
    And the user should see the counter cart increasing
    And the user clicks on the cart

@buy_product @add_to_cart
Scenario: Add a product to cart
    Then the user should see "Sauce Labs Backpack" product on the cart

@buy_product @form_checkout
Scenario: Fill checkout form with data user
    Then the user press checkout button
    And the user fill form with username "Alicia", lastname "Juste" and postal code "08123"
    And the user clicks on the Continue button

@buy_product @checkout_overview
Scenario: Checkout Overview
    And the user press checkout button
    And the user fill form with username "Alicia", lastname "Juste" and postal code "08123"
    And the user clicks on the Continue button
    Then the user should see the checkout overview data
    And the user should see the product price "29.99", tax "2.40" and total price "32.39"
    And the user clicks on the Finish button   

@buy_product @checkout_complete
Scenario: Checkout Complete
    And the user press checkout button
    And the user fill form with username "Alicia", lastname "Juste" and postal code "08123"
    And the user clicks on the Continue button
    And the user should see the checkout overview data
    And the user clicks on the Finish button
    Then the user should see the chekout complete information page   
