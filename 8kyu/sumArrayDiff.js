// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


// Pass in an array of integers
// Return the sum of the difference between each value in the array in descending order
// [1, 2, 3] -> 3-1 + 2-1 = 3

// Sort the array from big to small, and reduce the differences
// Slice the last element off first so the reduce function doesn't overflow

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a).slice(0, -1).reduce((a, c, i) => a + c - arr[i + 1], 0);
}

// One line

const sumOfDifferences = arr => arr.sort((a, b) => b - a).slice(0, -1).reduce((a, c, i) => a + c - arr[++i], 0);

// You can just subtract the biggest value from the smallest one

const sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;