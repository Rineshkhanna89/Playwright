import {chromium, test} from '@playwright/test';
test('launch browser', async () => {
    // Launch a new browser instance
    let browser = await chromium.launch();

    //create context and page
    let context = await browser.newContext();
    let page = await context.newPage();

    // Navigate to the desired URL
    await page.goto('https://playwright.dev/'); //https://leaftaps.com/opentaps/control/main

})