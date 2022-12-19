// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// Pass in a string of lowercase letters
// Return the largest score of consecutive consonants
// solve("zodiacs") = 26

// Store letter scores in a string, such that index of each letter = letter score
// Replace all vowels in the string with '.'
// Split the string into array with '.' as separator
// Reduce the array of substrings to return greatest substring score
// Use score.indexOf(letter) to determine letter score

function solve(s) {
    const score = '_abcdefghijklmnopqrstuvwxyz';
    const getScore = v => [...v].reduce((a, c) => a + score.indexOf(c), 0);
    s = [...s].map(e => 'aeiou'.includes(e) ? '.' : e).join('');
    return s.split('.').reduce((a, c) => getScore(c) > a ? getScore(c) : a, 0);
  };

// Brute force method

const isVowel = letter => 'aeiou'.includes(letter);
const getScore = letter => '_abcdefghijklmnopqrstuvwxyz'.split('').indexOf(letter);

function solve(s) {
    let sum = 0,
        highest = 0;
    
    for (letter of s) {
        if (isVowel(letter)) {
            sum = 0;
        }else {
            sum += getScore(letter);
            if (sum > highest) {
                highest = sum;
            };
        };
    }return highest;
}