// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

// Pass in an array of integers
// Return an array containing sub-arrays of pairs of input integers with a difference of 2
// [4, 3, 1, 5, 6] -> [[1, 3], [3, 5], [4, 6]]

// Run a loop inside a loop to compare each pair of numbers. 
// Add pairs with a diff of 2 to a new array. Return that array.

function twosDifference(input){
    let result = [];
    input.forEach(e => {
        input.forEach(k => {
            if (k - e == 2) result.push([e, k])
        });
    });
    return result;
   }

// Refactored into single line arrow function using a reduce
// This is also much better optimized, not running a loop inside a loop (quadratic)

const twosDifference = arr => arr.reduce((a, c) => arr.includes(c + 2) ? [...a, [c, c + 2]] : a, []);

// You could sort the array first for even better performance?