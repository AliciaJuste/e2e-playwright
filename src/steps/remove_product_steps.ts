import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

let initialCartCount: number;

When('the user clicks on the product {string} and goes to the detail page', async function (productName: string) {
    await this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: productName }).first().click();
    await expect(this.page.locator('[data-test="inventory-item-name"]').first()).toContainText(productName);
});

When('the user clicks on the Remove button of the {string} page', async function (removePage: string) {
    const cartBadgeLocator = this.page.locator('[data-test="shopping-cart-badge"]');
    //Verificar el número inicial de productos en el carrito
    if (await cartBadgeLocator.count() > 0) {
       initialCartCount = parseInt(await cartBadgeLocator.innerText());
    } else {
       initialCartCount = 0;
    }
    switch(removePage) {
        case "inventory" :
            await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
            break;
        case "product_detail":
            await this.page.locator('[data-test="remove"]').click();
            break;
        case "cart":
            await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
            break;

        default: break;
    }
});

When('the user should see one less product in the cart counter', async function () {
    const expectedCartCount = initialCartCount - 1;
    //Si hay más de un producto en el carrito
    if (expectedCartCount > 0) {
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(expectedCartCount.toString());
    //Si el carrito se vacia
    } else {
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
    }
});

Then('the user should see the cart without this product {string}', async function (product: string) {
    //Obtiene el número total de productos en el carrito usando la clase en vez del data-test porque el data-test 
    //es igual para la pagina principal de inventario
    const totalProducts = await this.page.locator('.cat_item').count();
    let productFound = false;
    // Itera sobre todos los productos en el carrito
    for (let i = 0; i < totalProducts; i++) {
        // Obtiene el nombre del producto en la posición i
        const productName = await this.page.locator('.cart-item .inventory_item_name').nth(i).innerText();
        
        if (productName === product) {
            productFound = true;
            break;
        }
    }
    // Espera que el producto no se encuentre en el carrito
    expect(productFound).toBe(false);
});





