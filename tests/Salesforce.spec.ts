import { test } from '@playwright/test';
test('launch Salesforce Application', async ({page}) => {

   
    // Navigate to the desired URL
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com"); // CSS Selector
    await page.locator('#Login').click(); // CSS Selector
    await page.locator("//input[@id='password']").fill("TestLeaf@2025"); //Xpath
    await page.locator("//input[@id='Login']").click(); //Xpath
    
    await page.waitForTimeout(5000);
})
