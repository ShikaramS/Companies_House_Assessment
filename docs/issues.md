# 🐞 Known Issues & Observations

## 1. Visual Bugs with `problem_user`
- When logged in as `problem_user`, item images fail to load on the inventory page.
- Some item links redirect incorrectly (e.g., to a 404 or wrong product detail).
- "Add to cart" button sometimes remains disabled or doesn't toggle to "Remove".

## 2. No Real API Available
- The Swag Labs site does not expose a real API for public use.
- Due to this, API testing was **not implemented**.

## 3. Browser Compatibility
- All tests were executed on Chromium. Cross-browser testing (e.g., Firefox, WebKit) was not validated in this round.

## 4. Performance Testing
- Not in scope. Playwright is focused on functional UI testing.
- No Lighthouse metrics or load testing included.

## 5. Error Handling Coverage
- Invalid login scenarios are covered.
- Network failure, timeout, or API latency issues are not testable due to limited control over backend.

---

### ✅ Potential Improvements
- Add Playwright Visual Regression testing to catch layout/UI bugs automatically.
- Integrate GitHub Actions for CI on pull requests.
- Introduce more negative test cases (e.g., empty cart checkout, form validation errors).
- Expand coverage to include edge users like `performance_glitch_user`.
