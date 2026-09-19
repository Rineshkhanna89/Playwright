import {test} from '@playwright/test';
test('launch Frames Application', async ({page}) => {
    // Navigate to the desired URL
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.frameLocator("//iframe[@id='singleframe']").locator("//input[@type='text']").fill("rineshkhanna89@gmail.com");//Xpath used to locate the input field inside the iframe
    await page.waitForTimeout(5000);

});