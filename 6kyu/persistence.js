// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Pass in a positive integer
// Return int, how many times its digits must be multiplied to get a single digit
// 19 -> 1 * 9 = 9, 1

// Check for less than 10, return count of iterations if so
// Run a recursive function which products each digit and increases the count by 1 each iteration

function persistence(num, count = 0) {
    if (num < 10) return count;
    let product = String(num).split('').reduce((a, c) => a * c, 1);
    return persistence(+product, ++count);
 }

// Using a while loop

function persistence(num, count = 0) {
    var count = 0;
    num = String(num);
    while (num.length > 1) {
        count++;
        num = num.split('').reduce((a, c) => a * c, 1).toString();
    }return count;
 }