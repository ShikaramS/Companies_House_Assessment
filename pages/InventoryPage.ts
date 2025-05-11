import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemName: string) {
    await this.page.locator('.inventory_item').filter({hasText: itemName }).locator('button').click();
    //await this.page.click(`text=${itemName} >> xpath=../..//button[text()='ADD TO CART']`);
  
   
  }

  async removeItemFromCart(itemName: string) {
    await this.page.locator('.inventory_item').filter({hasText: itemName}).locator('button').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async isItemImageVisible(itemName: string) {
    return await this.page.isVisible(`text=${itemName} >> xpath=../..//img`);
  }
}