function isNumberPalindrome(num) {

    let original = num; // Store original number
    let reversed = 0;   // Store reversed number

    for (; num > 0; num = Math.floor(num / 10)) {

        // Get the last digit
        let digit = num % 10;

        // Build the reversed number
        reversed = reversed * 10 + digit;
    }

    // Compare original and reversed numbers
    return original === reversed;
}

// Test cases
console.log(isNumberPalindrome(121));    // true
console.log(isNumberPalindrome(12321));  // true
console.log(isNumberPalindrome(1234));   // false