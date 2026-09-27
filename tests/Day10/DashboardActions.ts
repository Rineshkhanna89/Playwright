import { BaseActions } from "./BaseActions";

// 3. Create another child class called DashboardActions that extends BaseActions
export class DashboardActions extends BaseActions {
    // Additional property required by PDF
    welcomeTextLocator: string = "";

    // Method required by PDF that uses getText() from the parent class
    verifyDashboard() {
        const welcomeText = this.getText(this.welcomeTextLocator); // Uses parent getText method
        console.log("Dashboard welcome text: " + welcomeText);
    }
}

// ==========================================
// 4. Create objects and demonstrate inheritance
// ==========================================

// Create DashboardActions object matching Sample Test Data
const dashboard = new DashboardActions();
dashboard.pageName = "Dashboard Page";
dashboard.welcomeTextLocator = "#welcomeText";

// Test data variable from PDF
const url = "https://orangehrmlive.com";

// Call methods to match Expected Output (Console)
dashboard.openUrl(url);
dashboard.verifyDashboard();
