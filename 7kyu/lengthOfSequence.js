// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

// Pass in an array (arr) and a number (n)
// Return a number

// If array length < 2 return 0
// If n appears more than twice, return 0
// Find and store the first and last index of n in arr
// Slice the array from start to end and return the length

var lengthOfSequence = function (arr, n) {
    if (arr.length < 2) return 0;
    if (arr.filter(num => num == n).length > 2) return 0;
    const start = arr.indexOf(n);
    const end = arr.lastIndexOf(n);
    return arr.slice(start, end + 1).length;
};

// Refactored

function lengthOfSequence(arr, n) {
    return count(arr, n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
}

function count(arr, n) {
    return arr.filter(num => num == n).length;
}
