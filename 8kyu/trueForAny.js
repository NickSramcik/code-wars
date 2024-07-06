// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Pass in an array and a function
// Return boolean

// Loop through each item in the array
// If the function returns true with any of those items passed in, return true
// Otherwise return false

function any(arr, func) {
    return arr.some(x => func(x));
}
