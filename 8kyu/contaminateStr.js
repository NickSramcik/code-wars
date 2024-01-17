// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Pass in a string and a character
// Return the input string, with each char being replaced by input char

// 'shrek', 'o' -> 'ooooo'

// Get length of input string
// Return input character repeated length times

function contamination(text, char) {
    return char.repeat(text.length);
}

// Using map and arrow function

const contamination = (text, char) => [...text].map(_ => char).join('');
