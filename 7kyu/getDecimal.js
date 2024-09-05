// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2

// Pass in a decimal number
// Return a number, only the decimal

// Use modulus to get remainder when divided by 1
// Use absolute value to rid negative value
// Return result

function getDecimal(n) {
    return Math.abs(n % 1);
}
