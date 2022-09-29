// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Pass in an array of integers
// Return the maximum product of adjacent elements in the input array
// [1, 2, 3, 4, 5] -> 20

// Map the array into products with previous value. Return the max. 

function adjacentElementsProduct(arr) {
    return Math.max(...arr.slice(1).map((e, i) => e * arr[i]));
  }

// One line

const adjacentElementsProduct = arr => Math.max(...arr.slice(1).map((e, i) => e * arr[i]));

// No methods

function adjacentElementsProduct(arr) {
    let max = -Infinity;
    for (i = 1; i < arr.length; i++) {
        const product = arr[i] * arr[i - 1];
        if (product > max) max = product;
    }return max
}

// Refactoring with && short circuit

function adjacentElementsProduct(arr) {
    let max = -Infinity;
    for (i = 1; i < arr.length; i++) {
        const product = arr[i] * arr[i - 1];
        product > max && (max = product);
    }return max;
}