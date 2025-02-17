// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

// Pass in an array and a thing
// Return an array

// Let result be []
// Loop through input array
//    If current value is n, push i to result
// Return result

const findAll = (array, n) => {
    const result = [];

    for (let i in array) {
        if (array[i] == n) result.push(+i); 
    }

    return result;
};
