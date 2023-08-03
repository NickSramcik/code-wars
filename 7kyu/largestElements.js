// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Pass in a positive integer n, and an array of numbers
// Return an array, the n largest numbers of input array

// Sort the array from largest to smallest
// Slice the array from 0 to n, reverse it, and return it

function largest(n, array) {
    array.sort((a, b) => b - a);
    return array.slice(0, n).reverse();
}

// Refactored into arrow function

const largest = (n, arr) => !n ? [] : arr.sort((a, b) => a - b).slice(-n);
