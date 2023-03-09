// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// Pass in a string
// Return the string with every vowel replaced by !
// 'Ogres are like onions.' -> '!gr!s !r! l!k! !n!!ns.' 

// Store all vowels into a constant
// Convert string to array
// Map array, replacing any letter found in vowel constant with !
// Join into string and return

function replace(string) {
    const vowels = 'aeiouAEIOU';
    return string.split('').map(letter => vowels.includes(letter) ? '!' : letter).join('');
}

// Refactored into arrow function

const replace = s => [...s].map(e => 'aeiouAEIOU'.includes(e) ? '!' : e).join('');