// Write a function that checks if a given string (case insensitive) is a palindrome.


// Pass in a string (could be empty)
// Return boolean, whether the input is the same forwards and backwards (case insensitive)
// 'rAcecar' -> true

// Lowercase the string and return if it equals its reversed self


function isPalindrome(x) {
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
  }

// Refactored into arrow function

const isPalindrome = x => x.toLowerCase() == [...x.toLowerCase()].reverse().join('');