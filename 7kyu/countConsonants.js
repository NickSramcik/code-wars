// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// Pass in a string of text (any symbol)
// Return a number

// Declare a helper function taking in a string character
//    Let vowels be a string that stores consonants
//    Return boolean whether the input character contains a consonant
// Let consonants be 0
// Loop through input string characters
//    Plug each char into helper function and increment counter if it returns true
// Return consonants

function isConsonant(char) {
    const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
    return CONSONANTS.includes(char.toLowerCase());
}

function consonantCount(str) {
    let consonants = 0;

    for (char of str) {
        if (isConsonant(char)) consonants++;
    }

    return consonants;
}
