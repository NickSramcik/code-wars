// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


// Pass in a string of characters
// Return the string reversed, with only the letters included
// 'Shrek4ever' -> 'revekerhS' 

// Convert array, filter out the letters, reverse, join and return


// function reverseLetter(str) {
//     return [...str].filter(e => e >= 'A' && e <= 'z').reverse().join('');
//   }

// Doesn't work because there are symbols between capital and lowercase letters (Why would you order them that way smh)

function reverseLetter(str) {
    return [...str].filter(e => e.toUpperCase() !== e.toLowerCase()).reverse().join('');
  }


// One line using str.match with regex

const reverseLetter = s => s.match(/[a-zA-Z]/g).reverse().join('');