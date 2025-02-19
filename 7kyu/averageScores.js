// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

// Pass in an array
// Return a number

// Do not use traditional loops

// Reduce the array sum
// Divide by array length
// Round and return result

function average(scores) {
    const avg = scores.reduce((a, c) => a + c, 0) / scores.length;
    return Math.round(avg);
}
