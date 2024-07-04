import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

When('the user is logged in with username {string} and password {string}', async function (username: string, password:string) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);  
    await this.page.locator('[data-test="login-button"]').click();
});
      
When('the user navigates to the {string} page', async function (webURL: string) {
    await this.page.goto(webURL)
});

Then('the user should see the product page', async function () {
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
});

Then('the user should see the primary header', async function ()  {
  await expect(this.page.locator('[data-test="primary-header"] div').filter({ hasText: 'Swag Labs' }).first()).toBeVisible();

  await expect(this.page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(this.page.getByText('Swag Labs')).toBeVisible();
  await expect(this.page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await expect(this.page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

Then('the user should see the secondary header', async function ()  {
  await expect(this.page.locator('[data-test="secondary-header"]')).toBeVisible();

  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
  await expect(this.page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(this.page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
});

Then('the user should see the product list', async function () {
  await expect(this.page.locator('[data-test="inventory-container"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-list"]')).toBeVisible();
});

Then('the user should see the footer', async function ()  {
  await expect(this.page.locator('.footer')).toBeVisible();
});

Then('the user should see {int} items in the inventory list', async function (expectedCount) {
  const items = await this.page.locator('[data-test="inventory-item"]').count();
  expect(items).toBe(expectedCount);
});

