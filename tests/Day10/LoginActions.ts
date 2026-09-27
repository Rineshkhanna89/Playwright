import { BaseActions } from "./BaseActions";

// 2. Create a child class called LoginActions that extends BaseActions
export class LoginActions extends BaseActions {
    // Additional properties required by PDF
    usernameLocator: string = "";
    passwordLocator: string = "";
    loginButtonLocator: string = "";

    // Method required by PDF that uses the parent class methods
    login(username: string, password: string) {
        this.click(this.loginButtonLocator); // Uses parent click method
        console.log("Login successful for user: " + username);
    }
}

// ==========================================
// 4. Create objects and demonstrate inheritance
// ==========================================

// Create LoginActions object matching Sample Test Data
const login = new LoginActions();
login.pageName = "Login Page";
login.usernameLocator = "#username";
login.passwordLocator = "#password";
login.loginButtonLocator = "#loginBtn";

// Test data variables from PDF
const url = "https://orangehrmlive.com";
const username = "Admin";
const password = "admin123";

// Call methods to match Expected Output (Console)
login.openUrl(url);
login.login(username, password);
