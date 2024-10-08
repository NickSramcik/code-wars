// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// Pass in a string and a number
// Return an array of strings

// Split input string into an array of words
// Filter array for words of length > n
// return the result

function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(word => word.length > n);
}
