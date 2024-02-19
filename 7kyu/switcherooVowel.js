// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// Pass in a string
// Return a string, all vowels replaced with index

// Write a function that checks if a character is a vowel
// Loop through input string
// If current char is a vowel, replace with index
// Return new string

function isVowel(char) {
    const VOWELS = 'aeiou';
    return VOWELS.includes(char.toLowerCase());
}

function vowel2index(str) {
    const result = [];
    for (i = 0; i < str.length; i++) {
        if (isVowel(str[i])) result.push(i + 1);
        else result.push(str[i]);
    }

    return result.join('');
}
