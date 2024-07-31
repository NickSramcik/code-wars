// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// Pass in any amount of number arguments
// Return a string

// let NUMS be an array of each digit 0-9
// let input be arguments spread into an array, joined to string
// Return NUMS filtered for numbers that are not included in inputs, joined into a string with no separator

function unusedDigits() {
    const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const input = [...arguments].join('');
    return NUMS.filter(num => !input.includes(num)).join('');
}
