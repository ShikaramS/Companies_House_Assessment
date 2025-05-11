# 🧪 Test Plan – Swag Labs Automation Assessment

## 1. Objective
To automate key functional test cases for the Swag Labs site using Playwright, including both happy path and edge scenarios.

## 2. Scope
- ✅ Login & Logout
- ✅ Invalid Login
- ✅ Add to Cart
- ✅ Checkout Process

## 3. Tools & Tech
- Playwright (TypeScript)
- Node.js
- Visual Studio Code

## 4. Test Strategy
- Functional UI tests automated via Playwright.
- Page Object Model for clean code and maintainability.
- Exploratory manual testing for visual issues and glitchy behavior.

## 5. Test Data
- Stored in `utils/testData.ts`.
- Covers both standard and invalid users.
- Includes checkout input data.

## 6. Environment
- Target URL: [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/)
- Browser: Chromium via Playwright

## 7. Test Cases Summary
| Test File | Description |
|-----------|-------------|
| `login.spec.ts` | Valid login |
| `invalid-login.spec.ts` | Invalid credentials |
| `add-to-cart.spec.ts` | Add and verify items in cart |
| `checkout.spec.ts` | Complete checkout |
| `logout.spec.ts` | Logout workflow |

## 8. Risks & Mitigations
- ❗ Dynamic element locators → ✅ Page Objects and retries

## 9. How to Run
```bash
npx playwright test
npx playwright test --ui