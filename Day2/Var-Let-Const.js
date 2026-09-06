// To learn about the difference between var, let, and const, let's look at an example:

const browserName = "Chrome";

function getBrowserName() {
    if (browserName === "Chrome") {
        // var used output is undefined, let used output is chrome
        let browserName = "Firefox"; 

    console.log(browserName);
}
}
getBrowserName();