import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the user is on the Saucelabs page {string}', async function (webURL: string) {
    await this.page.goto(webURL);
});

When('the user fill username with {string}', async function(username: string) {
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill(username);
});

When('the user fill password with {string}', async function (password: string) {
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill(password);  
});

When('the user press login button', async function () {
    await this.page.locator('[data-test="login-button"]').click();
});
      
Then('the user should see the product page', async function () {
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
});

Then('the user should see an error message {string}', async function (errorMessage: string) {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    await expect(this.page.locator('[data-test="error"]')).toContainText(errorMessage);
 });
