// Capitalize First Letter of a String
// Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

// Input	Output
// string	String
// hello World	Hello World
// i love codewars	I love codewars
// This sentence is already capitalized	This sentence is already capitalized
// 0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
// JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

// String.capitalize()
// Pass in string (this)
// Return a string, first letter capitalized

// Store first letter using slice
// Store rest using slice
// If first letter is lowercase letter (char code between 97 & 122):
    // subtract 32 from its char code
// Concat first letter & rest and return

String.prototype.capitalize = function() {
    let firstLetter = this.slice(0, 1),
        rest = this.slice(1);
    
    if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
        firstLetter = String.fromCharCode(firstLetter.charCodeAt() - 32);
    }

    return firstLetter + rest;
}

// Refactored

String.prototype.capitalize = function() {
    const isLowerCase = char => char >= 'a' && char <= 'z';

    let firstLetter = this.slice(0, 1);
    const rest = this.slice(1);
    const CAP_OFFSET = 'a'.charCodeAt() - 'A'.charCodeAt()

    if (isLowerCase(firstLetter)) {
        firstLetter = String.fromCharCode(firstLetter.charCodeAt() - CAP_OFFSET);
    }

    return firstLetter + rest;
}
