import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   //Go to Amazon
  await page.goto('https://www.amazon.in/');
  //Search for Mobiles
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Mobiles');
  //Click on Enter to search for Mobiles
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');

   //Waiting for the event
  const page1Promise = page.waitForEvent('popup');

 //Click on the first matching Mobile link
  await page.getByRole('link', { name: 'Sponsored Ad - Apple iPhone' }).first().click();

  //Create the reference for newly opened page
  const page1 = await page1Promise;
  
    //click on Join Prime button in the newly opened page
  await page1.getByRole('button', { name: 'Join Prime >>' }).click();

   //Wait for the new page to load - additional method to ensure the page is fully loaded before performing actions
    await page1.waitForLoadState();

  //Print the title of the new page - join prime
    console.log("The title of the new page is: ",await page1.title());
    // await page1.screenshot({path: "screenshot.png"});
    
    //Bring the new page to the front
    page.bringToFront();
   
    // Go to Original Page and search for Furnitures
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).dblclick();

  //Search for Mobiles
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Furnitures');
  //Click on Enter to search for Furnitures
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');

  //Waiting for the event
  const page2Promise = page.waitForEvent('popup');

  //Click on the first matching Furniture link
  await page.getByRole('link', { name: 'Sponsored Ad - IAFA FURNITURE' }).click();

  //Create the reference for newly opened page2
  const page2 = await page2Promise;

  //click on Add to Cart button in the newly opened page2
  await page2.getByRole('button', { name: 'Add to cart', exact: true }).click();
 
  await page.waitForTimeout(5000);
});