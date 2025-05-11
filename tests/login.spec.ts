import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser } from '../utils/testData';

test('Valid login should redirect to inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});