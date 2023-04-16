// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

// Pass in two integers
// Return the remainder of the larger value dividing the smaller value
// 4, 3 -> 1

// Use a condintional to determine which input is larger and return the according modulus

function remainder(n, m) {
    if (n > m) return n % m;
    return m % n;
}

// Refactored into arrow function using ternary operator

const remainder = (a, b) => (a > b ? a % b : b % a);
