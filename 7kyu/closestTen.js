// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

// Pass in a number
// Return a number

// Divide number by 10
// Round the number
// Multiply the number by 10
// Return the number

const closestMultiple10 = num => {
    return Math.round(num / 10) * 10;
};
