Feature: Product page content

    @product_page
    Scenario: The user see the product list
        Given the user is on the Saucelabs page "https://www.saucedemo.com/"
        When the user is logged in with username "standard_user" and password "secret_sauce"
        And the user navigates to the "https://www.saucedemo.com/inventory.html" page
        Then the user should see the webpage title "Swag Labs"
        And the user should see the menu button and the cart button
        And the user should see the page title "Products" and the button filter with "az" order
        And the user should see the product list with 6 items
        And the user should see the social media buttons for "twitter", "facebook" and "linkedin"
        And the user should see the copyright