// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"


// Pass in a string
// Return a string

// Convert input string into array
// Filter the array to remove non-letters
// Sort the array to compare lowercase letters alphabetically
// Join into string and return

function alphabetized(str) {
    const ABC = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('')
              .filter(e => ABC.includes(e.toLowerCase()))
              .sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))
              .join('');
}

// Refactored for readability

function alphabetized(str) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz',
          result = [];
    
    for (letter of ALPHABET) {
        for (char of str) {
            if (char.toLowerCase() == letter) result.push(char);
        }
    }

    return result.join('');
}

// Test Cases 

console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy');
