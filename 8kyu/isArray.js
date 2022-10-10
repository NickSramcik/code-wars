// Task
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 
// Using string template and ternary operator can make your work easier.


// Pass in a parameter
// Return whether or not it's an array. If it contains 5 & 13, it's a black array, otherwise a white array
// [5, 13, 12] -> 'It's a black array'

// Check if input is an array, then check if it contains 5 & 13

function blackAndWhite(arr, result = 'white') {
    if (!Array.isArray(arr)) result = 'fake';
    else if (arr.includes(5) && arr.includes(13)) result = 'black';
    return `It's a ${result} array`;
  }

// One line using turnary

const blackAndWhite = a => 
    `It's a ${!Array.isArray(a) ? 'fake' : a.includes(5) && a.includes(13) ? 'black' : 'white'} array`;