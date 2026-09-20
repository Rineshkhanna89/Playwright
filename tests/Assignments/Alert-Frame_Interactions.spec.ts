import { chromium,test } from "@playwright/test";

test("Handling alerts,frames with text verification", async ({page}) => {

await page.goto(" https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt ");
const selectFrame=await page.frameLocator('#iframeResult');

page.on("dialog",async(alert)=>{

    if(alert.type()==="prompt"){
        await alert.accept("Home Assignment");
        let value=await selectFrame.locator("//p[@id='demo']").textContent();
        console.log("the content is: ",value)
        test.expect(value).toContain("Home Assignment")
        
    }

})
selectFrame.locator("//button[text()='Try it']").click();
await page.waitForTimeout(3000);
})