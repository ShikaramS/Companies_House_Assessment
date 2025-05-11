import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, performanceGlitchUser } from '../utils/testData';

async function measureLoginTime(page: Page, user: { username: any; password: any; }) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const startTime = Date.now();
  await loginPage.login(user.username, user.password);
  await page.waitForFunction(() => document.title === 'Swag Labs');
  return Date.now() - startTime;
}

test('Performance glitch user takes longer to login than standard user', async ({ page }) => {
  const standardTime = await measureLoginTime(page, validUser);
  await page.context().clearCookies();  // Reset session between tests
  await page.goto('https://www.saucedemo.com/v1/');

  const glitchTime = await measureLoginTime(page, performanceGlitchUser);

  console.log(`Standard user login time: ${standardTime}ms`);
  console.log(`Performance glitch user login time: ${glitchTime}ms`);

  expect(glitchTime).toBeGreaterThan(standardTime + 2000); // Must be at least 2 seconds slower

  test.info().annotations.push({
    type: 'warning',
    description: `Performance glitch user login time (${glitchTime}ms) exceeded standard by ${glitchTime - standardTime}ms`
  });
});