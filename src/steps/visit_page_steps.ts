import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from 'playwright/test';

let browser;
let page;

Given('the user opens the browser', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  this.page = page;
})

When('the user navigates to {string}', async function (webURL: string) {
  await this.page.goto(webURL);
});

Then('the user sees the login form', async function () {
  await expect(this.page.getByText('Swag Labs')).toBeVisible();
  await expect(this.page.locator('[data-test="username"]')).toBeVisible();
  await expect(this.page.locator('[data-test="password"]')).toBeVisible();
  await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
});


