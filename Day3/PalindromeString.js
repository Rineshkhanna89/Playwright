// Function to reverse a string
function reverseString(str) {

    let chars = str.split(""); // Convert string into character array
    let reversed = "";

    // Loop through the array in reverse direction
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }

    console.log("Reversed String:", reversed);
    return reversed;
}

// Function to check palindrome
function isPalindrome(str) {
    let reversed = reverseString(str);

    // Compare original and reversed strings
    return str === reversed;
}

// Test cases
let testStrings = [
    "madam",
    "racecar",
    "hello",
    "level",
    "javascript"
];

// Print results
for (let str of testStrings) {
    console.log("\nOriginal String:", str);
    console.log("Is Palindrome:", isPalindrome(str));
}