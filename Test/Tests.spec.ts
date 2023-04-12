import { test, expect } from '@playwright/test';
import { chromium, BrowserContext, Page } from '@playwright/test';
import { BeforeDoIT } from '../Page/HomePage';
import { RegistrationPage } from '../Page/RegistrationPage';
import { AssertionOfRegistration } from '../Assertion/RegistrationPageAssertion';
import { AccountPage } from '../Page/AccountPage';
import { AssertAccountPage } from '../Assertion/AccountPageAssertion';

test.describe('Registration page', () => {
  let browser: any;
  let context: BrowserContext;
  let page: Page;


  test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    const homePage = new BeforeDoIT(page);
    homePage.navigateTOHomePage()

  });

  // test('Check registration process', async () => {
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.registrationProcess();
  //   const registrationPageAssertion = new AssertionOfRegistration(page)
  //   await registrationPageAssertion.assertAfterRegistration()

  // });

  test('Edit account ', async () => {

    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const editAccoutn = new AccountPage(page);
    await editAccoutn.editAccount();
    const assertEditAccount = new AssertAccountPage(page);
    await assertEditAccount.assertEditAccount()

  });



});