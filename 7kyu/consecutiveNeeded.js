// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0

// Pass in an array of numbers
// Return a number

// Return 0 if array length = 0
// let range be the difference b/w array's maximum and array's minimum
// Return array.length - range + 1

function consecutive(array) {
    if (!array.length) return 0;
    const range = Math.max(...array) - Math.min(...array);
    return range - array.length + 1;
}
