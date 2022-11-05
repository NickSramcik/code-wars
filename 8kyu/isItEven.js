// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


// Pass in a number
// Return if it is even
// 4.4 -> false
// Return the modulus of input by 2

function testEven(n) {
    return n % 2 == 2;
}

// Refactored into arrow function

const testEven = n => n % 2 == 0;

const testEven = n => !(n % 2);