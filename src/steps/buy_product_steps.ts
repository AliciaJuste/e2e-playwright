import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

let initialCartCount: number;

When('the user add to cart {string}', async function (productName: string) {
  const cartBadgeLocator = this.page.locator('[data-test="shopping-cart-badge"]');
  //Verificar el número inicial de productos en el carrito
  if (await cartBadgeLocator.count() > 0) {
    initialCartCount = parseInt(await cartBadgeLocator.innerText());
  } else {
    initialCartCount = 0;
  }
  //Aladir el producto al carrito
  await this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replace(/ /g, '-')}"]`).click();
});

When('the user should see the counter cart increasing', async function () {
  const expectedCartCount = (initialCartCount + 1).toString();
  await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(expectedCartCount);
});
    
When('the user clicks on the cart', async function () {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
});

Then('the user should see {string} product on the cart', async function (s: string) {
  await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(this.page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-item-price"]')).toBeVisible();
});

Then('the user press checkout button', async function () {
  await this.page.locator('[data-test="checkout"]').click();
});

Then('the user fill form with username {string}, lastname {string} and postal code {string}', async function (userName: string, lastName: string, postalCode: string) {
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
  await expect(this.page.locator('.checkout_info')).toBeVisible();
  await expect(this.page.locator('[data-test="firstName"]')).toBeVisible();
  await expect(this.page.locator('[data-test="lastName"]')).toBeVisible();
  await expect(this.page.locator('[data-test="postalCode"]')).toBeVisible();
  await this.page.locator('[data-test="firstName"]').fill(userName);
  await this.page.locator('[data-test="lastName"]').fill(lastName);
  await this.page.locator('[data-test="postalCode"]').fill(postalCode);
});

Then('the user clicks on the Continue button', async function () {
  await this.page.locator('[data-test="continue"]').click();
});

Then('the user should see the checkout overview data', async function () {
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await expect(this.page.locator('[data-test="cart-list"]')).toBeVisible();
  await expect(this.page.locator('[data-test="cart-quantity-label"]')).toContainText('QTY');
  await expect(this.page.locator('[data-test="cart-desc-label"]')).toContainText('Description');
  await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(this.page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(this.page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-item"] div').filter({ hasText: '$' }).nth(1)).toBeVisible();
  await expect(this.page.locator('[data-test="payment-info-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
  await expect(this.page.locator('[data-test="payment-info-value"]')).toBeVisible();
  await expect(this.page.locator('[data-test="shipping-info-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
  await expect(this.page.locator('[data-test="total-info-label"]')).toBeVisible();
});

Then('the user clicks on the Finish button', async function () {
  await this.page.locator('[data-test="finish"]').click();
});

Then('the user should see the product price {string}, tax {string} and total price {string}', async function (itemTotal: string, tax: string, totalPrice: string) {
  await expect(this.page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
  await expect(this.page.locator('[data-test="subtotal-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="tax-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="tax-label"]')).toContainText(`Tax: $${tax}`);
  await expect(this.page.locator('[data-test="total-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="total-label"]')).toContainText(`Total: $${totalPrice}`);
  await expect(this.page.locator('[data-test="subtotal-label"]')).toContainText(`Item total: $${itemTotal}`);
});

Then('the user should see the chekout complete information page', async function () {
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
  await expect(this.page.locator('[data-test="pony-express"]')).toBeVisible();
  await expect(this.page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(this.page.locator('[data-test="complete-text"]')).toBeVisible();
  await expect(this.page.locator('[data-test="back-to-products"]')).toBeVisible();
  await this.page.locator('[data-test="back-to-products"]').click();
});







