// Conditional Statements in JavaScript
// This function demonstrates the use of if-else statements to launch different browsers based on the browser name.
function launchBrowser() {
        var browserName = "safari";
        if (browserName === "chrome") {
            console.log("Launching Chrome browser...");
        } else if (browserName === "firefox") {
            console.log("Launching Firefox browser...");
        } else if (browserName === "safari") {
            console.log("Launching Safari browser...");
        } else {
            console.log("Invalid browser name.");
        }
}   
launchBrowser();

// This function demonstrates the use of switch statements to run different types of tests based on the test type.
function runTest() {
        var testType = "sanity";
        switch (testType) {
            case "sanity":
                console.log("Running sanity test...");
                break;
            case "regression":
                console.log("Running regression test...");
                break;
            default:
                console.log("Running smoke test...");
        }
}   
runTest();


