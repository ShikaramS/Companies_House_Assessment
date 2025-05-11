import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('.btn_primary');
  }

  async finishCheckout() {
    await this.page.click('.cart_footer a.btn_action');
  }

  async isOrderComplete() {
    return await this.page.isVisible('.complete-header');
    
  }

  async getThankYouMessage(){
    return await this.page.textContent('.complete-header');
  }
}