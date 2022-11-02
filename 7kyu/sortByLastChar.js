// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// Pass in a string of words, nonempty, no funny biz
// Return an array of words, sort words alphabetically by last letter (ignore caps)
// Maintain input order if last letters are equal

// 'Chocolate is king' -> ['Chocolate', 'king', 'is']
// 'Onions have layers' -> ['have', 'Onions', 'layers']
// 'I like turtles' -> ['like', 'I', 'turtles']

function last(x){
  // Split the string into an array of words
  // Sort this array by last letter character (lowercase) & return
  return x.split(' ').sort((a, b) => a.toLowerCase().charCodeAt(--a.length) - b.toLowerCase().charCodeAt(--b.length));
}

// Refactored into arrow function

const last = x => x.split(' ').sort((a, b) => a.toLowerCase().slice(-1).charCodeAt(0) - b.toLowerCase().slice(-1).charCodeAt(0));

// Don't worry about case

const last = x => x.split(' ').sort((a, b) => a.slice(-1).charCodeAt(0) - b.slice(-1).charCodeAt(0));

// let str = 'turtle';
// console.log(str, str.charAt(str.length - 1))

console.log(last('Chocolate is king'), '=', ['Chocolate', 'king', 'is'])
console.log(last('Onions have layers'), '=', ['have', 'Onions', 'layers'])
console.log(last('I like turtles'), '=', ['like', 'I', 'turtles'])