// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// Pass in an array of integers
// Return an array of integers with dupes removed (keep the last one)
// [3, 4, 4, 3, 6, 3] -> [4, 6, 3]

// Reverse the array
// Create a new set of that array to remove duplicates
// Convert that set to an array and reverse it again
// Return the result

function solve(arr) {
    return [...new Set(arr.reverse())].reverse();
}

// Refactored by filtering values that are not the last index of its value

function solve(arr) {
    return arr.filter((v, i) => i == arr.lastIndexOf(v));
}
