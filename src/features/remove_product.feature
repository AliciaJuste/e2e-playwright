Feature: Remove a product

Background:
    Given the user is on the Saucelabs page "https://www.saucedemo.com/"
    And the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user add to cart "Sauce Labs Backpack"
    And the user should see the counter cart increasing
    
@remove_product @remove_product_from_inventory
Scenario: Remove a product from Inventory page
    When the user clicks on the Remove button of the "inventory" page
    Then the user should see one less product in the cart counter
    And the user should see the cart without this product "Sauce Labs Backpack"

@remove_product @remove_product_from_item_page
Scenario: Remove a product from Inventory item page
    When the user clicks on the product "Sauce Labs Backpack" and goes to the detail page
    And  the user clicks on the Remove button of the "product_detail" page
    Then the user should see the cart without this product "Sauce Labs Backpack"

@remove_product @remove_product_from_cart
Scenario: Remove a product from Cart
    And the user clicks on the cart
    Then the user should see the cart without this product "Sauce Labs Backpack"
