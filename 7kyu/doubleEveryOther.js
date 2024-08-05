// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

// Pass in an array of numbers
// Return an array of numbers

// Return a map of the array that doubles numbers w/ odd index

function doubleEveryOther(arr) {
    return arr.map((num, i) => i % 2 ? num * 2 : num);
}
