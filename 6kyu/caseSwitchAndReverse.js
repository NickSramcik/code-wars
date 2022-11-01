// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// Pass in a string, including spaces and leading/trailing spaces (never empty)
// Return the string with lowercase/uppercase switched, and reverse the order of the words
// "Example Input" -> "iNPUT eXample"
// "Hello World!" -> "wORLD! hELLO"
// "Ogres are like onions" -> "ONIONS LIKE ARE oGRES"

function stringTransformer(str) {
    // Split the string into an array of words
    // For each word, examine char code to detect lower/upper case letters and switch them
    // Reverse the array, join words back into string & return
    return str.split(' ')
              .map(e => e.split('')
                .map(k => k.charCodeAt(0) > 64 && k.charCodeAt(0) < 91 ? k.toLowerCase() : 
                          k.charCodeAt(0) > 96 && k.charCodeAt(0) < 123 ? k.toUpperCase() : 
                          k)
                .join(''))
              .reverse()
              .join(' ');
  }
  
  // Examining case equality instead of character codes
  
  function stringTransformer(str) {
    return str.split(' ')
              .reverse()
              .join(' ')
              .split('')
              .map(e => e == e.toUpperCase() ? 
                    e.toLowerCase() :
                    e.toUpperCase())
              .join('');
  }
  
  // Refactored into arrow function
  
  const stringTransformer = s => s.split(' ').reverse().join(' ').split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('');
  
  // console.log('z'.charCodeAt(0))
  
  
  // console.log(stringTransformer("Example Input"), "iNPUT eXample")
  // console.log(stringTransformer("Hello World!"), "wORLD! hELLO")
  // console.log(stringTransformer("Ogres are like onions"), "ONIONS LIKE ARE oGRES")
  