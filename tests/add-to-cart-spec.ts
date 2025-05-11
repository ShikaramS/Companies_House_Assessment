import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { validUser } from '../utils/testData';

test('User can add and remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.goToCart();

  await expect(page).toHaveURL("https://www.saucedemo.com/v1/cart.html");
  
  const items = await cartPage.getCartItems();
  expect(items.length).toBe(1);

  await cartPage.removeItem('Sauce Labs Backpack');
  const updatedItems = await cartPage.getCartItems();
  expect(updatedItems.length).toBe(0);
  
}); 