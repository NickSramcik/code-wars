// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

// Pass in 8 numbers, representing grandparent age
// Return a sum of each age squared. Square root the sum and divid it by two
// 65, 60, 75, 55, 60, 63, 64, 45 -> 86

// Create an array of all arguments passed in
// Reduce the elements of the array, squaring them first
// Square root the sum, and divide it by 2. 
// Floor the result and return.

function predictAge(...ages) {
    const sumOfSquares = ages.reduce((a, c) => a + c ** 2, 0),
          result = Math.sqrt(sumOfSquares) / 2;
    return Math.floor(result);
}

// Refactored into arrow function

const predictAge = (...ages) => Math.floor(Math.sqrt(ages.reduce((a, c) => a + c ** 2, 0)) / 2);

// Using Math.hypot() which returns the square root of the sum of its squares

function predictAge(...ages) {
    const result = Math.hypot(...ages) / 2;
    return Math.floor(result);
}

const predictAge = (...ages) => Math.floor(Math.hypot(...ages) / 2);
