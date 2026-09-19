import {test} from "@playwright/test"
test("Learn Alerts", async ({page}) => {
    await page.goto("https://demoqa.com/alerts");//https://leafground.com/alert.xhtml

    page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept("Rinesh Sulendran");
    });
    await page.locator("//button[@id='promtButton']").click();// //span[text()='On button click, prompt box will appear']/following::button
    await page.waitForTimeout(5000);
    
}

)

