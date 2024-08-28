// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Pass in an array of 2 numbers
// Return an array of 2 numbers

// Declare a recursive GCD function to find the greatest common divisor
// Use gcd to find a common divisor
// Return the result with numerator and denominator divided by divisor

function reduce([numerator, denominator]) {
    function gcd(a, b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    const divisor = gcd(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
}
