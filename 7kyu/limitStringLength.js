// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// Example:

// solution('Testing String', 3) --> 'Tes...'
// solution('Testing String', 8) --> 'Testing ...'
// solution('Test', 8)           --> 'Test'

// Pass in a string, and an integer (limit for the string length)
// Return that string with every character past the limit replaces with '...'
// 'Ogres have layers', 8 -> 'Ogres ha...' 

// Slice the string using the limit
// If the input string is already the correct length or less than limit, return it as is


function solution(str, l) {
    if (str.length <= l) return str;
    return str.slice(0, l) + '...';
}

// One liner using turnary

const solution = (str, l) => str.length <= l ? str : str.slice(0, l) + '...';

// Using substring

const solution = (s, l) => s.length > l ? s.substr(0, l) + '...' : s;