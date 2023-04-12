import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'

export class AccountPage {

    constructor(private page: Page) { }

    async clickEditAccount() {

        await this.page.locator(fakestore.accountPage.editAccount).click()

    }

    async fillNameInput() {

        const name = fakestore.editAccount.name
        await this.page.locator(fakestore.editAccount.nameInput).click()
        await this.page.locator(fakestore.editAccount.nameInput).fill("")
        await this.page.locator(fakestore.editAccount.nameInput).type(name)

    }
    async fillSurNameInput() {
        const surName = fakestore.editAccount.surName

        await this.page.locator(fakestore.editAccount.surName).click()
        await this.page.locator(fakestore.editAccount.surName).fill("")
        await this.page.locator(fakestore.editAccount.surName).type(surName)
    }
    async fillEmailInput() {
        const email = fakestore.editAccount.email
        await this.page.locator(fakestore.editAccount.emailInput).click()
        await this.page.locator(fakestore.editAccount.emailInput).fill("")
        await this.page.locator(fakestore.editAccount.emailInput).type(email)

    }
    async fillDisplayedName() {
        const displayName = fakestore.editAccount.displayedName
        await this.page.locator(fakestore.editAccount.baseName).click()
        await this.page.locator(fakestore.editAccount.baseName).fill("")
        await this.page.locator(fakestore.editAccount.baseName).type(displayName)

    }

    async fillCurrentPassword() {
        const password = fakestore.registration.password
        await this.page.locator(fakestore.editAccount.currentPassword).click()
        await this.page.locator(fakestore.editAccount.currentPassword).fill("")
        await this.page.locator(fakestore.editAccount.currentPassword).type(password)

    }

    async fillNewPassword() {


        const password = fakestore.editAccount.fillNewPassword
        await this.page.locator(fakestore.editAccount.newPassword).click()
        await this.page.locator(fakestore.editAccount.newPassword).fill("")
        await this.page.locator(fakestore.editAccount.newPassword).type(password)

    }
    async repetPassword() {

        const password = fakestore.editAccount.fillNewPassword
        await this.page.locator(fakestore.editAccount.repetNewPassword).click()
        await this.page.locator(fakestore.editAccount.repetNewPassword).fill("")
        await this.page.locator(fakestore.editAccount.repetNewPassword).type(password)
    }
    async confrimChanges() {

        await this.page.locator(fakestore.editAccount.confirmChanges).click()
    }

    async editAccount() {
        this.clickEditAccount()
        this.fillNameInput()
        this.fillSurNameInput()
        this.fillEmailInput()
        this.fillDisplayedName()
        this.fillCurrentPassword()
        this.fillNewPassword()
        this.repetPassword()
        this.confrimChanges()




    }

}