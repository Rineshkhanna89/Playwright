import {chromium, test} from "@playwright/test";
const url="http://leaftaps.com/opentaps/control/main";
function createLeadsUsingLocations(){
    test("Launch Browser", async ({page}) => {
    await page.goto(url);
    await page.getByRole("textbox",{name:"Username"}).fill("DemoSalesManager");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.getByRole("link",{name: "CRM/SFA"}).click();
    await page.getByRole("link",{name: "Leads"}).click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('#createLeadForm_companyName').fill("TestCompany");
    await page.locator('#createLeadForm_firstName').fill("Rinesh");
    await page.locator('#createLeadForm_lastName').fill("S");
    await page.locator('#createLeadForm_personalTitle').fill("Dear");
    await page.locator('#createLeadForm_generalProfTitle').fill("Mr");
    await page.locator('#createLeadForm_annualRevenue').fill("50000000");
    await page.locator('#createLeadForm_departmentName').fill("TestDepartment");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("7676767678");
   // await page.getByRole("button",{name: "Create Lead"}).click();
   await page.locator("//input[@name='submitButton']").click();
   await page.waitForTimeout(3000);
})
}
createLeadsUsingLocations();