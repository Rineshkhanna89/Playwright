// Function to check whether a number is a palindrome
function isNumberPalindrome(num) {

    // Store the original number for comparison later
    let original = num;

    // Variable to build the reversed number
    let reversed = 0;

    // Continue until all digits are processed
    while (num > 0) {

        // Get the last digit of the number
        // Example: 123 % 10 = 3
        let digit = num % 10;

        // Add the digit to the reversed number
        // Example:
        // reversed = 0 * 10 + 3 = 3
        // reversed = 3 * 10 + 2 = 32
        reversed = reversed * 10 + digit;

        // Remove the last digit from the number
        // Example:
        // 123 / 10 = 12.3
        // Math.floor(12.3) = 12
        num = Math.floor(num / 10);
    }

    // Compare original number with reversed number
    // If both are same, it is a palindrome
    return original === reversed;
}

// Test cases
console.log(isNumberPalindrome(121));    // true
console.log(isNumberPalindrome(12321));  // true
console.log(isNumberPalindrome(1234));   // false