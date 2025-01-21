// Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

// Pass in a number n
// Return boolean

// Let digitSum be a sum of each digit
//  Convert number to string, split into array of string numbers, and reduce its sum
// Let reverseSum be digitSum reversed
// Return whether digitSum * reverseSum = n

function numberJoy(n) {
    const digitSum = n.toString().split('').reduce((a, c) => a + Number(c), 0);
    const reverseSum = Number(digitSum.toString().split('').reverse().join(''));
    return digitSum * reverseSum == n;
}
