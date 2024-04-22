// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// Pass in a string
// Return an array

// Create a function that compares an input character to a constant variable that stores vowels
// Return boolean, whether the vowel constant has input character

// Store an empty result array, to hold indices later
// Loop through the input string
    // If current character is a vowel, push index + 1 to result array
// Return result array

function isVowel(char) {
    const VOWELS = 'aeiouy';
    return VOWELS.includes(char.toLowerCase());
}

function vowelIndices(word) {
    const result = [];

    for (i = 0; i < word.length; i++) {
        if (isVowel(word[i])) result.push(i + 1);
    }

    return result;
}

// Test Cases

console.log(vowelIndices("mmm").join('') == [].join(''))
console.log(vowelIndices("apple").join('') == [1,5].join(''))
console.log(vowelIndices("super").join('') == [2,4].join(''))
console.log(vowelIndices("orange").join('') == [1,3,6].join(''))
console.log(vowelIndices("supercalifragilisticexpialidocious").join('') == [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33].join(''))
