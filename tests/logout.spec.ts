import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser } from '../utils/testData';

test('User can logout from inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  await page.click('.bm-burger-button');
  await page.click('#logout_sidebar_link');
  
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html'.trim());
});