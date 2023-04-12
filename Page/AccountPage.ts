import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'

export class AccountPage {

    constructor(private page: Page) { }


    async generateEmail(): Promise<string> {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let email = '';

        // Generate a random prefix of 8 characters
        for (let i = 0; i < 8; i++) {
            email += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        // Add a random number between 1000 and 9999
        email += Math.floor(Math.random() * 9000) + 1000;

        // Add a random top-level domain
        const tlds = ['.com', '.net', '.org'];
        email += `@test${tlds[Math.floor(Math.random() * tlds.length)]}`;

        return email;
    }

    async clickEditAccount() {

        await this.page.locator(fakestore.accountPage.editAccount).click()
        await this.page.waitForLoadState('networkidle')


    }

    async fillNameInput() {

        const name = fakestore.editAccount.name
        await this.page.locator(fakestore.editAccount.nameInput).click()
        await this.page.locator(fakestore.editAccount.nameInput).type(name)


    }
    async fillSurNameInput() {

        const surName = fakestore.editAccount.surName
        await this.page.locator(fakestore.editAccount.surnameInput).click()
        await this.page.locator(fakestore.editAccount.surnameInput).type(surName)


    }
    async fillEmailInput() {

        await this.page.locator(fakestore.editAccount.emailInput).click()
        await this.page.locator(fakestore.editAccount.emailInput).fill("")
        await this.page.locator(fakestore.editAccount.emailInput).type(await this.generateEmail())

    }
    async fillDisplayedName() {
        const displayName = fakestore.editAccount.displayedName
        await this.page.locator(fakestore.editAccount.baseName).click()
        await this.page.locator(fakestore.editAccount.baseName).type(displayName)

    }

    async fillCurrentPassword() {
        const password = fakestore.registration.password
        await this.page.locator(fakestore.editAccount.currentPassword).click()
        await this.page.locator(fakestore.editAccount.currentPassword).type(password)

    }

    async fillNewPassword() {


        const password = fakestore.editAccount.fillNewPassword
        await this.page.locator(fakestore.editAccount.newPassword).click()
        await this.page.locator(fakestore.editAccount.newPassword).type(password)

    }
    async repetPassword() {

        const password = fakestore.editAccount.fillNewPassword
        await this.page.locator(fakestore.editAccount.repetNewPassword).click()
        await this.page.locator(fakestore.editAccount.repetNewPassword).type(password)

    }
    async confrimChanges() {

        await this.page.locator(fakestore.editAccount.confirmChanges).click()
    }

    async editAccount() {
        await this.clickEditAccount()
        await this.fillNameInput()
        await this.fillSurNameInput()
        await this.fillEmailInput()
        await this.fillDisplayedName()
        await this.fillCurrentPassword()
        await this.fillNewPassword()
        await this.repetPassword()
        await this.confrimChanges()

    }

}