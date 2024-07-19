// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// Pass in an array
// Return a number

// Let evenSum be the reduced sum of input array's even numbers
// Multiply sum by last number in input array and return result
// Return 0 if result is NaN

function evenLast(numbers) {
    const evenSum = numbers.reduce((acc, cur, i) => i % 2 == 0 ? acc + cur : acc, 0);
    return evenSum * numbers[numbers.length - 1] || 0;
}
