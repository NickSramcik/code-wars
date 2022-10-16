// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// Pass in a number, representing km/hr
// Return a number representing cm/sec rounded down
// 1.08 -> 30
// Divide the input by 3600 and multiply it by 100000, floor it


const cockroachSpeed = n => Math.floor(n / 3600 * 100000);

// Refactored and simplified using | truncate trick

const cockroachSpeed = n => n * 27.778 | 0;

