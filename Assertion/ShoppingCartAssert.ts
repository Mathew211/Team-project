import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'

export class AssertShoppingPage {

    constructor(private page: Page) { }

    async assertBuyingWithoutTicket() {

        const shoppingDone = await this.page.locator(fakestore.ShoppingCart.buyingWithOutTicketDoen).innerText()
        expect(shoppingDone).toBe(fakestore.ShoppingCart.shoppingTextMessage)
    }

}