import { test, expect } from "@playwright/test";

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

test("Check whether a string is a palindrome", () => {
    const input = "malayalam";
    const reversedString = reverseString(input);

    console.log("Reversed String is:", reversedString);

    expect(reversedString).toBe(input);
    console.log("The given string is a palindrome");
});
