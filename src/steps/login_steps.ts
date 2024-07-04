import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Given('the user is on the Saucelabs page {string}', async function (webURL) {
    await this.page.goto(webURL);
})

When('the user fill username with {string}', async function(username: string) {
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill(username);
})

When('the user fill password with {string}', async function (password: string) {
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill(password);  
})

When('the user press login button', async function () {
    await this.page.locator('[data-test="login-button"]').click();
})    
      
Then('the user should see the product page', async function () {
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
})

Then('the user should see an error message {string}', async function (errorMessage: string) {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    await expect(this.page.locator('[data-test="error"]')).toContainText(errorMessage);
 })

  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.getByText('carry.allTheThings() with the')).toBeVisible();
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  await expect(page.getByText('$29.99')).toBeVisible();
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart');
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
  await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Fleece Jacket');
  await expect(page.locator('[data-test="item-2-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Onesie');
  await expect(page.locator('[data-test="item-3-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
});*/