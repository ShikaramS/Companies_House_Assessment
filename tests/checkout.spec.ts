import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { validUser, checkoutInfo } from '../utils/testData';

test('User can complete checkout process', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await inventoryPage.addItemToCart('Sauce Labs Fleece Jacket');
  await inventoryPage.goToCart();
  await cartPage.clickCheckout();
  await checkoutPage.fillCheckoutInfo(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.zip);
  await checkoutPage.finishCheckout();

  const isComplete = await checkoutPage.isOrderComplete();
  expect(isComplete).toBeTruthy();

  const thankYouMessage = await checkoutPage.getThankYouMessage();
  expect(thankYouMessage).toBe("THANK YOU FOR YOUR ORDER"); 

  
});