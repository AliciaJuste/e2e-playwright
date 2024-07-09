import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

When('the user is logged in with username {string} and password {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);  
    await this.page.locator('[data-test="login-button"]').click();
});
      
When('the user navigates to the {string} page', async function (webURL) {
    await this.page.goto(webURL)
});


Then('the user should see the webpage title {string}', async function (webTitle)  {
  await expect(this.page.locator('[data-test="primary-header"]')).toContainText(webTitle);
});

Then('the user should see the menu button and the cart button', async function () {
  await expect(this.page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(this.page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

Then('the user should see the page title {string} and the button filter with {string} order', async function (pageTitle, orderFilter)  {
  await expect(this.page.locator('[data-test="title"]')).toContainText(pageTitle);
  await expect(this.page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(this.page.locator('[data-test="product-sort-container"]')).toHaveValue(orderFilter);
});

Then('the user should see the product list with {int} items', async function (expectedCount) {
  await expect(this.page.locator('[data-test="inventory-container"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-list"]')).toBeVisible();
  const items = await this.page.locator('[data-test="inventory-item"]').count();
  expect(items).toBe(expectedCount);
});

Then('the user should see the social media buttons for {string}, {string} and {string}', async function (socialMedia1, socialMedia2, socialMedia3) {
  const socialMedias = [socialMedia1, socialMedia2, socialMedia3];
  
  for (let i = 0; i < socialMedias.length; i++) {
    await expect(this.page.locator(`[data-test="social-${socialMedias[i]}"]`)).toBeVisible();
  }
});

Then('the user should see the copyright', async function () {
  await expect(this.page.locator('[data-test="footer-copy"]')).toBeVisible();
});



