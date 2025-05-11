import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItem(itemName: string) {
    await this.page.click(`text=${itemName} >> xpath=../..//button[text()='REMOVE']`);
  }

  async clickCheckout() {
    await this.page.click('.checkout_button');
  }

  async getCartItems() {
    return await this.page.$$('[class="cart_item"]');
  

    
  }
}