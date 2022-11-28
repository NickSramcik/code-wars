// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// Pass in a string
// Return the string with lowercase vowels removed
// 'Ogres have layers' -> 'Ogrs hv lyrs'
// Split string into array, filter out elements that are included in string of vowels

function shortcut (string) {
    return [...string].filter(e => !'aeiou'.includes(e)).join('');
  }

// Refactored into arrow function

const shortcut = str => [...str].filter(e => !'aeiou'.includes(e)).join('');