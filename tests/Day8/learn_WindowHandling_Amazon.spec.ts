import {test} from "@playwright/test";

test("Learn Window Handling", async ({page,context}) => {
    //Go to Amazon
    await page.goto("https://www.amazon.in/");//https://leafground.com/window.xhtml 
    //Search Furnitures
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("Furnitures");
    //Click on Search button
    await page.locator("[id='nav-search-submit-button']").click();

    //Waiting for the event
    const newPagePromise = context.waitForEvent('page');

    //Click on the first matching furniture link
    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']").first().click(); 
    
    //Create the reference for newly opened page
    const newPage = await newPagePromise;

    //click on Add to Cart button in the newly opened page
    await newPage.locator("//input[@id='add-to-cart-button']").click();
    
    //Wait for the new page to load - additional method to ensure the page is fully loaded before performing actions
    await newPage.waitForLoadState();
    
    //Print the title of the new page
    console.log("The title of the new page is: ",await newPage.title());
    // await newPage.screenshot({path: "screenshot.png"});
    
    //Bring the new page to the front
    page.bringToFront();

    await page.waitForTimeout(5000);
}
)