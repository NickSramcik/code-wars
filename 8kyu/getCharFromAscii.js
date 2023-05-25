// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

// Pass in a positive integer, representing ascii character code
// Return a string, single letter, converted input
// 65 -> 'A'

// Return a string created from input character code

function getChar(c){
    return String.fromCharCode(c);    
}

// Refactored using arrow function

const getChar = String.fromCharCode; 
