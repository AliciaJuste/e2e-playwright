Feature: Login

    Background:     
        Given the user is on the Saucelabs page "https://www.saucedemo.com/"

    @login @validlogin
    Scenario: Login with valid username and password
        When the user fill username with "standard_user"
        And the user fill password with "secret_sauce"
        And the user press login button
        Then the user should see the product page

    @login @invalidlogin
    Scenario Outline: Login with invalid data
        When the user fill username with <username>
        And  the user fill password with <password>
        And  the user press login button
        Then the user should see an error message <errorMessage>

        Examples:
        | username | password | errorMessage |
        | "standard_user" | "wrong_password" | "Epic sadface: Username and password do not match any user in this service" |
        | "locked_out_user" | "secret_sauce" | "Epic sadface: Sorry, this user has been locked out." |