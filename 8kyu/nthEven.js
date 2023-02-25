// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// Pass in a positive integer n
// Return a positive integer, the nth even positive integer
// 3 -> 4 (0, 2, 4)
// [0, 2, 4, 6, 8, 10, 12, 14, 16...]

// Return 2n - 2

function nthEven(n){
    return 2 * n - 2;
}

// Refactored into arrow function

const nthEven = n => 2 * n - 2;