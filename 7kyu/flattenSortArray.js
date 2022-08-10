// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


// Pass in multiple arrays
// Return the arrays combined and sorted into one array
// [[1, 2], [3, 4]] -> [1, 2, 3, 4]

// Concat the arrays, sort the result, then return


function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
  }

// One liner

const flattenAndSort = arr => [].concat(...arr).sort((a, b) => a - b);

// Converting to string 

const flattenAndSort = arr => arr.toString().split(',').filter(e => e).map(Number).sort((a, b) => a - b);