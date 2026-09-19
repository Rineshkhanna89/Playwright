import {test} from '@playwright/test';
test('launch Frames Application', async ({page}) => {
    // Navigate to the desired URL
    await page.goto('https://demo.automationtesting.in/Frames.html');
    
    await page.getByRole("link", {name:"frame with in an Iframe"}).click();
   
    //Frame inside a frame using Xpath
    await page.frameLocator("//iframe[@src='MultipleFrames.html']").frameLocator("//iframe[@src='SingleFrame.html']").locator("//input[@type='text']").fill("rineshkhanna89@gmail.com");//Xpath used to locate the input field inside the iframe  
    
    //Another way for frame using CSS Selector
    // await page.frameLocator("iframe[src='MultiplehFrames.html']").frameLocator("iframe[src='SingleFrame.html']").locator("//input[@type='text']").fill("divibabu13@gmail.com");//Xpath used to locate the input field inside the iframe
    await page.waitForTimeout(5000);

});