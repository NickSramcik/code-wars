// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// Pass in a positive integer, n
// Return an array of arrays

// Store an empty result array
// Loop from 0 to n
//      Push an array of length i to result array, fill the array with 1
// Return result

function pyramid(n) {
    const result = [];

    for (i = 1; i <= n; i++) {
        result.push(Array.from({length: i}).fill(1));
    }

    return result;
}

// Test Cases

console.log(pyramid(0), '->', []);
console.log(pyramid(1), '->', [[1]]);
console.log(pyramid(2), '->', [[1], [1, 1]]);
console.log(pyramid(3), '->', [[1], [1, 1], [1, 1, 1]]);
