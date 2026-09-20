import { chromium,test,expect } from "@playwright/test";


test ("Leafground Checkbox", async({page})=>{

await page.goto("https://leafground.com/checkbox.xhtml");
await page.locator('//span[text()="Basic"]').click();
await page.locator('//span[text()="Ajax"]').click();
expect.soft(page.locator('[role="alert"]')).toContainText('Checked');
await page.locator('//label[text()="Javascript"]').click()
await page.locator('[id="j_idt87:ajaxTriState"] .ui-chkbox-box').click();
await expect.soft(page.getByText('State = 1', { exact: true })).toBeVisible();
await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
await expect.soft(page.getByText('Checked', { exact: true })).toBeVisible();
let status= await page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled"]').isEnabled();
console.log(status);
await page.locator('//span[@class="ui-icon ui-icon-triangle-1-s"]').click();
await page.locator('//li[@data-item-value="Miami"]//div[contains(@class,"ui-chkbox-box")]').click();
await page.locator('//li[@data-item-value="London"]//div[contains(@class,"ui-chkbox-box")]').click();
await page.locator('//li[@data-item-value="Berlin"]//div[contains(@class,"ui-chkbox-box")]').click();
await page.waitForTimeout(5000);
await page.close();
})