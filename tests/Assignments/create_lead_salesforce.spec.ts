
import {chromium, test} from "@playwright/test";

// This code need to be checked , fixed for any errors and then run to check if it is working fine or not
// Launch Browser
test("Salesforce Lead", async ({page}) => {
// Launch Browser
await page.goto("https://login.salesforce.com/?locale=in");

await page.locator('#username').fill("rineshkhanna89.23768267e4e7@agentforce.com");
await page.locator('//input[@id="Login"]').click();
await page.locator('//input[@id="password"]').fill("Achiever@123$");
await page.locator('//input[@id="Login"]').click();
await page.locator('//a//span[text()="Sales"]').click();
await page.locator('//a[@title="New"]').click();
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByRole('option', { name: 'Mr.' }).click();
await page.getByRole('textbox',{name: "Last Name"}).fill("K");
await page.getByRole('textbox',{name: "Company"}).fill("ABCD");
await page.getByRole('button',{name: "Save"}).click();

})