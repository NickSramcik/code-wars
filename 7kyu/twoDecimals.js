// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!

// Right examples:
// 32.8493 is 32.84
// 14.3286 is 14.32

// Incorrect examples (e.g. if you round the numbers):
// 32.8493 is 32.85
// 14.3286 is 14.33

// Pass in a number
// Return a number

// Use toFixed to cut decimal places to 2 digits
// Convert resulting string back to a number and return the result

function twoDecimalPlaces(number) {
    return Number(number.toFixed(2));
}

// ^ Doesn't work because it rounds the number

// let numArr be input number stringified and split with . separator
// Slice 2nd term of numArr so that its length is 2
// Join numArr with . separator, convert it to a number, and return the result

function twoDecimalPlaces(number) {
    let numArr = number.toString().split('.');
    numArr[1] = numArr[1].slice(0, 2);
    return Number(numArr.join('.'));
}

// Refactored with truncate
// Multiply and divide by 100 to keep 2 decimal places

function twoDecimalPlaces(number) {
    return Math.trunc(number * 100) / 100;
}
