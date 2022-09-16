// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


// Pass in a string of words
// return the string with duplicate words removed
// 'Ogres are are like like onions onions' -> 'Ogres are like onions'

// Convert string to array, create a new set of this array, then join back into a string and return

function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
  }

// One line

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');


// Using a filter
// The filter will only include elements whos index is equal to that of its first appearance

const removeDuplicateWords = s => s.split(' ').filter((e, i, a) => a.indexOf(e) == i).join(' ');