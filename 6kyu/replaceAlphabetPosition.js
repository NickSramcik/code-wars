// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// Pass in a string
// Return a string, with each letter being replaced with its number positon
// 'abcde' -> '1 2 3 4 5'

// Store number values of each letter in an object
// Split string into array, filter out non letters, map & replace with properties of alphabet object, join & return

function alphabetPosition(text) {
    const alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    };
    text = text.toLowerCase().split('').filter(e => e.toLowerCase() !== e.toUpperCase())
    return text.map(e => alphabet[e]).join(' ');
  }

  // Using charCodeAt() method

function alphabetPosition(str) {
    str = str.toLowerCase().split('').filter(e => e.toLowerCase() !== e.toUpperCase())
    return str.map(e => e.charCodeAt(0) - 96).join(' ');
} 

// One liner

const alphabetPosition = s => s.toLowerCase().split('').map(e => e.charCodeAt(0) - 96).filter(e => e > 0 && e < 27).join(' ');