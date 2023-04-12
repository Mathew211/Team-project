import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'
export class AssertAccountPage {

    constructor(private page: Page) { }


    async assertEditAccount() {
        const texMessageAfterEdit = await this.page.locator(fakestore.editAccount.editMessage).innerText()
        expect(texMessageAfterEdit).toBe(fakestore.editAccount.editTextMessage)


        const messageLocator = this.page.locator(fakestore.editAccount.editMessage);
        const backgroundColorStyle = await messageLocator.evaluate((el) => {
            const style = window.getComputedStyle(el);
            return style.backgroundColor;
        });
        expect(backgroundColorStyle).toBe(fakestore.editAccount.messageColor);





    }

}