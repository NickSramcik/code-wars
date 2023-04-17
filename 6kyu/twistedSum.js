// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// Pass in a positive integer
// Return a number, a sum of each number's digits
// 10 -> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// Create a function that returns a sum of every digit in a number
// Store a counter
// Loop from 1 to n
// Add the digit sum of each number to the counter
// Return the counter

function digitSum(num) {
    return num.toString().split('').reduce((a, c) => a + Number(c), 0);
}

function twistedSum(n) {
    let result = 0;

    for (i = 1; i <= n; i++) {
        result += digitSum(i);
    }

    return result;
}
