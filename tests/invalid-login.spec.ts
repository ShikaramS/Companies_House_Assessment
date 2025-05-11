import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { invalidUser } from '../utils/testData';

test('Invalid login should show an error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalidUser.username, invalidUser.password);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Username and password do not match');
});