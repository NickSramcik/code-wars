// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// Pass in a single character string
// Return boolean

// Store constant variables representing character code bounds for lowercase letters
//      ^This way we don't have to actually memorize those character codes! :] 
// Lowercase the input character
// Check if input character code is between stored bounds, return result

function isItLetter(character) {
    const LetterStart = 'a'.charCodeAt(0);
    const LetterEnd = 'z'.charCodeAt(0);
    const charCode = character.toLowerCase().charCodeAt(0);

    return LetterStart <= charCode && charCode <= LetterEnd;
}

// Refactored by comparing uppercase and lowercase

function isItLetter(character) {
    return character.toLowerCase() !== character.toUpperCase();
}

console.log('a'.charCodeAt(0))
console.log('A'.charCodeAt(0))
console.log('z'.charCodeAt(0))
console.log('Z'.charCodeAt(0))
