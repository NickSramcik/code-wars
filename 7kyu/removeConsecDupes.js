// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


// Pass in a string of words
// Return the string with consecutive duplicates removed
// 'Ogres are are like onions Ogres are like onions' -> 'Ogres are like onions Ogres are like onions'


// Split the string into an array of words
// Filter the array to remove elements that equal previous element
// Join back into string and return

const removeConsecutiveDuplicates = s => s.split(' ').filter((e, i, a) => e != a[i - 1]).join(' ');

// Refactored to be shorter

const removeConsecutiveDuplicates = s => s.split(' ').filter((e, i, a) => e != a[--i]).join(' ');
