// return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// Pass in an array of numbers
// Return an array of numbers

// Let max be the largest number of input array
// Let nextMax be -Infinity
// Loop through input
//   if current num > nextMax AND less than max, set nextMax to current
// Return [max, nextMax]

function twoHighest(arr) {
    const max = Math.max(...arr);
    const nextMax = arr.reduce((a, c) => c > a && c < max ? c : a, -Infinity);
    return max > -Infinity ? nextMax > -Infinity ? [max, nextMax] : [max] : [];
}

// Refactored with sort

function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}
