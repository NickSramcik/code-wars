// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// Pass in an integer
// Return an integer, the sum of the input's digits
// 43 -> 7     -41 -> 5

// Stringify and split the absolute value of the input and reduce the digits

function sumDigits(number) {
    return String(Math.abs(number)).split('').reduce((acc, cur) => acc + Number(cur), 0);
}

// One liner

const sumDigits = n => String(Math.abs(n)).split('').reduce((a, c) => a + +c);

// Using shorthands for split and stringify, concatenating an empty string makes a number a string
// Shorthand for numberfying the current element inside the reduce is more readable with parentheses

const sumDigits = n => [...Math.abs(n)+''].reduce((a, c) => a+(+c), 0);