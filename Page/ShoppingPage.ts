import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'


export class ShopppingPage {

    constructor(private page: Page) { }

    async navigateToHOmePage() {

        await this.page.goto(fakestore.URL)
    }

    async choseTripToBuy() {

        await this.page.locator(fakestore.addTripToShoppingCart).click()

    }
    async goToShopppignCart() {

        await this.page.locator(fakestore.seeShoppingCart).click()

    }
    async goTOpayment() {
        await this.page.locator(fakestore.ShoppingCart.goToPayment).click()
        await this.page.waitForLoadState('networkidle')
    }
    async fillStreetInput() {

        await this.page.locator(fakestore.ShoppingCart.streetInput).type(fakestore.ShoppingCart.streetName)
    }
    async fillPostalCode() {

        await this.page.locator(fakestore.ShoppingCart.postalCOdeInput).type(fakestore.ShoppingCart.postalCOde)

    }

    async fillCityInput() {

        await this.page.locator(fakestore.ShoppingCart.cityInput).type(fakestore.ShoppingCart.city)

    }

    async fillPhoneNumber() {

        await this.page.locator(fakestore.ShoppingCart.numberOfPhone).type(fakestore.ShoppingCart.phoneNumber)

    }
    async fillCreditCardNumber() {

        await this.page.locator(fakestore.ShoppingCart.numberOfCreditCard).click()
        await this.page.locator(fakestore.ShoppingCart.numberOfCreditCard).type(fakestore.ShoppingCart.creditNumber)

    }
    async fillDateOfExpire() {
        await this.page.locator(fakestore.ShoppingCart.dateOfExpire).click()
        await this.page.locator(fakestore.ShoppingCart.dateOfExpire).type(fakestore.ShoppingCart.expireDate)
        await this.page.waitForLoadState('networkidle')
    }

    async fillCVNumber() {
        await this.page.locator(fakestore.ShoppingCart.CVCElement).click()
        await this.page.locator(fakestore.ShoppingCart.CVCElement).type(fakestore.ShoppingCart.CVC)
        await this.page.waitForLoadState('networkidle')
    }

    async confrimTerms() {

        await this.page.locator(fakestore.ShoppingCart.termsInput).click()
        await this.page.waitForLoadState('networkidle')

    }

    async pressBuyAndgit status
    
        await this.page.getByRole('button', { name: 'Kupuję i płacę' }).click();
await this.page.waitForTimeout(15000)

    }

    async buyWithOutTicket() {

    await this.navigateToHOmePage()
    await this.choseTripToBuy()
    await this.goToShopppignCart()
    await this.goTOpayment()
    await this.fillStreetInput()
    await this.fillCityInput()
    await this.fillPostalCode()
    await this.fillPhoneNumber()
    await this.fillCreditCardNumber()
    await this.fillDateOfExpire()
    await this.fillCVNumber()
    await this.confrimTerms()
    await this.pressBuyAndPay()

}

}