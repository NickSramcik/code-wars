// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91 2 +2 2 +2 2=9.

// Pass in an array of integers
// Return a number, the sum of the array's squares
// [1, 2, 3] -> 1^2 + 2^2 + 3^ 2 = 14

// Reduce the array, squaring each element and adding it to accumulator
// Return the result

function squareSum(numbers) {
    return numbers.reduce((a, c) => a + c ** 2, 0);
}

// Refactored into arrow function

const squareSum = numbers => numbers.reduce((a, c) => a + c ** 2, 0);
