// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Pass in 2 positive integers x & y
// Return a number -> the greatest common divisor of x & y
// 30, 12 -> 6

// Loop down from the smaller input to 0
// If current index is divisible into both inputs, return it

function mygcd(x,y) {
    let smallerNum = Math.min(x, y);
    for (i = smallerNum; i > 0; i--) {
        if (x % i == 0 && y % i == 0) {
            return i;
        };
    };
}

// Using recursion
// This uses the Euclidean Algorithm:
// Divide inputs into each other. Save the remainder and keep the divisor. Repeat this until there is no remainder. 

function mygcd(x, y) {
    if (y == 0) return x;
    return mygcd(y, x % y);
}

// Refactored into arrow function

const mygcd = (x, y) => y == 0 ? x : mygcd(y, x % y); 