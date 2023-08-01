// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// Pass in 2 positive integers
// Return a number, first input to the power of the 2nd input
// 3, 2 -> 9

// Store a result variable and set it to first input
// Loop from 1 to 2nd input
// Multiply result by first input for each iteration
// Return the result
// If power is 0 return 1

function numberToPower(number, power) {
    if (power == 0) return 1;
    let result = number;
    for (i = 1; i < power; i++) {
        result *= number;
    }
    return result;
}
