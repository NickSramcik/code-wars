// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// Pass in an array
// Return a number

// Convert input array into a set
// Convert set back into array and reduce its sum
// Return result

function uniqueSum(arr) {
    const sum = [...new Set(arr)].reduce((a, c) => a + c, 0);
    return arr.length ? sum : null;
}

// Refactored w/ null as initial value

function uniqueSum(arr) {
    return [...new Set(arr)].reduce((a, c) => a + c, null);
}
