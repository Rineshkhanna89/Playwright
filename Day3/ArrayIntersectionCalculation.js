// Function to find common elements between two arrays
function intersection(arr1, arr2) {

    // Store common elements without duplicates
    let result = [];

    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {

        // Check if the current element exists in arr2
        if (arr2.includes(arr1[i])) {

            // Check if the element is not already in the result array
            if (!result.includes(arr1[i])) {

                // Add the common element to the result array
                result.push(arr1[i]);
            }
        }
    }

    // Return the intersection array
    return result;
}

// Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]

// No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));
// Output: []

// All elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));
// Output: [1, 2, 3]

// Arrays containing duplicates
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));
// Output: [2, 3]

