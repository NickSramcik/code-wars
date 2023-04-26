// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// Pass in a string
// Return boolean, whether every character in the string is unique
// 'shrek' -> true      'onion' -> false

// Compare the length of the input with the length of a new Set of that input converted to a string
// Return that conditional

function hasUniqueChars(str) {
    return str.length == [...new Set(str)].join('').length;
}

// Refactored using arrow functions and the size property

const hasUniqueChars = str => str.length == new Set(str).size;
