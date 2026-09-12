import {chromium, test} from '@playwright/test';
//page without browser, context and page creation it works correctly because playwright 
// test runner automatically creates browser, context and page for us
test('launch browser', async ({page}) => {
    // // Launch a new browser instance
    // let browser = await chromium.launch();

    // //create context and page
    // let context = await browser.newContext();
    // let page = await context.newPage();

    // Navigate to the desired URL
    await page.goto('https://playwright.dev/'); //https://leaftaps.com/opentaps/control/main

})