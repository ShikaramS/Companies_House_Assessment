### README.md

# Companies House – Swag Labs Automation Assessment

This repository contains the automation assessment for the Senior Test Engineer role at Companies House, using the Swag Labs demo site.

## 🔧 Tech Stack
- **Playwright** with **TypeScript**
- **Node.js** (v18+ recommended)

## 📁 Project Structure
```
swag-labs-assessment/
│
├── tests/                  # All test files
│   ├── login.spec.ts
│   ├── invalid-login.spec.ts
│   ├── add-to-cart.spec.ts
│   ├── checkout.spec.ts
│   ├── logout.spec.ts
│   ├── performanceGlitch.spec.ts
│ 
│
├── pages/                  # Page Objects
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│
├── utils/                  # Utilities
│   └── testData.ts
│
├── docs/                   # Documentation
│   ├── test-plan.md
│   ├── issues.md
│
│
├── README.md
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## 📆 Installation
```bash
git clone https://github.com/ShikaramS/Companies_House_Assessment.git
cd Assessment_CompaniesHouse
npm install
```

## 🚀 Running Tests
```bash
npx playwright test
```

## 🧪 Test Coverage
| Test | Description |
|------|-------------|
| `login.spec.ts` | Tests valid login functionality |
| `invalid-login.spec.ts` | Verifies error handling for invalid credentials |
| `add-to-cart.spec.ts` | Adds an item to cart and validates it |
| `checkout.spec.ts` | Simulates a full checkout flow |
| `logout.spec.ts` | Tests the logout functionality |


## 🧩 Page Object Model
| Page | Purpose |
|------|---------|
| `LoginPage.ts` | Handles login actions and field interactions |
| `InventoryPage.ts` | Interacts with product listing and cart buttons |
| `CartPage.ts` | Manages cart actions like add/remove items |
| `CheckoutPage.ts` | Fills checkout details and proceeds through steps |

## 📁 Utility Files
- `testData.ts`: Stores credentials and test inputs for reusability.

---

## 🧪 Manual vs Automated Testing

| Area | Test Type | Reason |
|------|-----------|--------|
| Login / Logout | Automated | Critical path, frequent regression area |
| Invalid Login | Automated | Validates error handling logic |
| Cart Functionality | Automated | Regression-friendly and user-flow essential |
| Checkout Form Validation | Automated | Validates required fields and flow transitions |
| UI Visual Bugs (like missing images) | Manual | Requires human validation |
| Unusual user-specific behavior | Manual | Needs exploratory testing |


## ✅ How to Run a Specific Test
```bash
npx playwright test tests/login.spec.ts
```

## 📸 Debugging with UI
```bash
npx playwright test --ui