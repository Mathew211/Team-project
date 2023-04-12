import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'
export class AssertAccountPage {

    constructor(private page: Page) { }


    async assertEditAccount() {
        const texMessageAfterEdit = await this.page.locator(fakestore.editAccount.editMessage).innerText()
        expect(texMessageAfterEdit).toBe(fakestore.editAccount.editTextMessage)

        const messageColor = await this.page.locator(fakestore.editAccount.editMessage)
        const colorStyle = await messageColor.evaluate((el: HTMLElement) => window.getComputedStyle(el));
        const color = colorStyle.getPropertyValue('backgraound-color');

        expect(color).toBe(fakestore.editAccount.messageColor)

    }

}