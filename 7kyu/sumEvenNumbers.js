// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0


// Pass in an array of numbers
// Return a number, the sum of even numbers
// [1, 2, 3] -> 2

// Filter the array for even numbers
// Reduce the filtered array and return the result

function sumEvenNumbers(input) {
    return input.filter(e => e % 2 == 0).reduce((a, c) => a + c, 0);
}
