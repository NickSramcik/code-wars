// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// Pass in a string
// Return which vowel is missing in the string (A -> 0, E -> 1, I -> 2, O -> 3, U -> 4)
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"

// Lowercase the string and check for each vowel's inclusion. Return relevant number if not

function absentVowel(x){
    x = x.toLowerCase();
    if (!x.includes('a')) return 0;
    if (!x.includes('e')) return 1;
    if (!x.includes('i')) return 2;
    if (!x.includes('o')) return 3;
    if (!x.includes('u')) return 4;
}

// Refactored using an array of vowels

function absentVowel(x) {
    return ['a','e','i','o','u'].reduce((a, c, i) => x.toLowerCase().includes(c) ? a : i, 0);
}

// Refactored into arrow function, using indexOf

const absentVowel = x => ['a','e','i','o','u'].reduce((a, c, i) => x.toLowerCase().indexOf(c) == -1 ? i : a, 0);

// Using indexOf is slower

const absentVowel = x => ['a','e','i','o','u'].reduce((a, c, i) => x.toLowerCase().includes(c) ? a : i, 0);

// Made shorter with spread syntax and findIndex

const absentVowel = x => [...'aeiou'].findIndex(e => !x.includes(e));