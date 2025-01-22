// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Pass in 2 arrays of strings
// Return an array of numbers

// Let result be an empty array
// Loop through b
//   Filter a for strings that match current string of b
//   Push length of resulting array to result
// Return result

function solve(a, b) {
    const result = [];

    for (let current of b) {
        result.push(a.filter(str => str == current).length)
    }

    return result;
}

// Refactored w/ map

function solve(a, b) {
    return b.map(bStr => a.filter(aStr => bStr == aStr).length);
}

// ^ Both solutions have quadratic time complexity because of nested loops
