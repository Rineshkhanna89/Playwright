import { expect, test } from "@playwright/test";
import path from "path";

test("Test to upload file standard",async({page})=>{

    //Launch the application
    await page.goto("https://blazorise.com/docs/components/file-picker");

    //Click the "Choose files" element
    const fileUpload = page.locator('input[type="file"]').first();

    // Upload TestLeaf.png using setInputFiles().
    await fileUpload.setInputFiles(path.join(__dirname, "../../Data/TestLeaf.png"));

    await expect(fileUpload).toHaveValue(/TestLeaf\.png/);

})