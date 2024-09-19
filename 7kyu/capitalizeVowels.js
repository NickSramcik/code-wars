// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// Pass in a string
// Return a string

// Declare a function that returns boolean, whether a letter is a vowel
//   store vowels in a string, check if vowel string includes input letter
// split input string into an array
// map that array, capitalizing each letter if it is a vowel
// join array back into a string and return it

function isVowel(letter) {
    const VOWELS = 'AEIOUaeiou';
    return VOWELS.includes(letter);
}

function swap(string) {
    return string.split('').map(letter => isVowel(letter) ? letter.toUpperCase() : letter).join('');
}
