import { expect, test } from '@playwright/test';
test('launch leafground application', async ({page}) => {

    // Navigate to the desired URL  -- original code
// await page.goto('https://leafground.com/input.xhtml');
// await page.getByPlaceholder('Babu Manickam').fill('Rinesh Sulendran');
// await page.waitForTimeout(5000)
   
    // Navigate to the desired URL
    await page.goto('https://leafground.com/input.xhtml');
    const nameField = page.getByPlaceholder('Babu Manickam');
    await nameField.fill('Rinesh Sulendran');
    const enteredName = await nameField.inputValue();
    if (enteredName === 'Rinesh Sulendran') {
        console.log('Name is correct');
    } else {
        throw new Error(`Name is incorrect. Expected "Rinesh Sulendran", but received "${enteredName}"`);
    }
    await page.waitForTimeout(5000);
})
