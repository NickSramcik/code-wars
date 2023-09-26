// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// Pass in a string
// Return a string

// Split the input string into an array, space as separator
// Map the array of strings:
//   Store the number: filtering the string for numbers
//   Convert number to string, according to character code
//   Filter the numbers out of the word, use slice to switch around the first and last letter
//   Concatenate converted number with switched string
// Join that new array into a string, separate w/ spaces, and return 


function decodeWord(word) {
    let num = word.split('').filter(letter => Number.isInteger(+letter)).join('');
    word = word.slice(num.length, word.length);

    if (word.length > 1) {
        // Switch first and last letter
        word = word.slice(word.length - 1, word.length) + word.slice(1, -1) + word.slice(0, 1);
    }
        
    // Add the character code back in
    word = String.fromCharCode(num) + word;
    return word;
}

function decipherThis(str) {
    return result = str.split(' ').map(word => decodeWord(word)).join(' ');
}

// const string = '72olle';
// console.log(string.slice(2, -1))

console.log(decipherThis('72olle 103doo 100ya'), '->', 'Hello good day')
console.log(decipherThis('82yade 115te 103o'), '->', 'Ready set go')
