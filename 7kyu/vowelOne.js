// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// Pass in a string
// Return a string of numbers, 1 for vowel 0 for consonates
// 'shrek' -> '00010'

// Store vowel and non vowels in string variables
// Store result string
// Loop through input string
// Add number to result string accordingly
// Return result string

function vowelOne(string) {
    const VOWELS = 'aeiou';
    let result = '';

    for (char of string) {
        if (VOWELS.includes(char.toLowerCase())) result += '1';
        else result += '0';
    }

    return result;
}

// Refactored using arrow function

const vowelOne = s => [...s].map(e => 'aeiouAEIOU'.includes(e) ? 1 : 0).join('');
