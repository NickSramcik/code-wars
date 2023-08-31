// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// Examples
// 1   -->  "mocha_missing!"
// 3   -->  "Java"
// 6   -->  "JavaScript"
// 12  -->  "CoffeeScript"

// Pass in a number
// Return a string

// Store an empty string
// If divisible by 12, add 'Coffee' to string
// else If divisible by 3, add 'Java' to string
// If divisible by 3 and even, add 'Script' to script
// if string is empty return 'mocha_missing!'

function caffeineBuzz(n) {
    let result = '';

    if (!(n % 12)) result = 'Coffee';
    else if (!(n % 3)) result = 'Java';
    if (!(n % 3) && !(n % 2)) result += 'Script';

    return result || 'mocha_missing!';
}

// Refactored

function caffeineBuzz(n) {
    if (n % 12 == 0) return 'CoffeeScript';
    if (n % 6 == 0) return 'Javascript';
    if (n % 3 == 0) return 'Java';
    return 'mocha_missing!';
}
