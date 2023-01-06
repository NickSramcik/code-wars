// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

// Pass in a positive integer
// Return an array of each digit
// 1234 -> [1, 2, 3, 4]


// Convert number to string, split into array, return a map of array converting each value to a number

function digitize(n) {
    return n.toString().split('').map(e => Number(e));
}

// Refactored into arrow function

const digitize = n => [...''+n].map(e => +e);