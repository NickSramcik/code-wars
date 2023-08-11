// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


// Pass in a string of braces -> ( { and [
// Return whether they all open and close in a valid manner (boolean)
// '({[]})' -> true

// Store variables for each kind of brace
// If a brace opens, add 1 to that type. If it closes, subtract 1. 
// If any variable is ever negative, return false
// If the final character returns all variables to 0, return true. Otherwise, return false. 

function validBraces(braces){
    let round = 0,
        curly = 0,
        square = 0;
    for (i = 0; i < braces.length; i++) {
        if (braces[i] === '(') round++;
        if (braces[i] === ')') round--;
        if (braces[i] === '{') curly++;
        if (braces[i] === '}') curly--;
        if (braces[i] === '[') square++;
        if (braces[i] === ']') square--;
        if (round < 0 || curly < 0 || square < 0) return false;
    }return (!round && !curly && !square);
  }

// ^ Doesn't work. Doesn't catch closing outside tags before the inside tags are closed. [(])
// Gonna have to come back to this. 