// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Pass in a string
// Return bool, whether the sting includes all 26 letters
// 'The quick brown fox jumps over the lazy dog.' -> true
// Make a sorted set of the string, see if it includes the whole alphabet

function isPangram(str){
    return [...new Set(str.toLowerCase().split('').sort())].join('').includes('abcdefghijklmnopqrstuvwxyz');
  }

// One liner

const isPangram = str => [...new Set(str.toLowerCase().split('').sort())].join('').includes('abcdefghijklmnopqrstuvwxyz');

// Using the every method

const isPangram = str => 'abcdefghijklmnopqrstuvwxyz'.split('').every(e => str.toLowerCase().includes(e));