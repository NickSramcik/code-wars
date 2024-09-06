// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

// Pass in a string of parentheses
// Return boolean, whether they are valid

// ( = open
// ) = close

// let count be 0
// Loop through input string
//      If current is open, increment count
//      If current is close, decrement count
//      If count < 0 return false
// If count is 0 return true, otherwise return false

function validParentheses(parenStr) {
    let count = 0;

    for (char of parenStr) {
        if (char == ')') count--;
        if (char == '(') count++;
        if (count < 0) return false;
    }

    return count == 0;
}
