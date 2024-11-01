// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// a=26, z=1, !=27, ?=28, ' '=29

// Pass in an array of string numbers
// Return a string

// Let ALPHABET be letters and symbols stored in order specified above
// Map the input array, convert each number to a symbol according index in ALPHABET
// Join array into a string and return it

function switcher(arr){
    const ALPHABET = '.zyxwvutsrqponmlkjihgfedcba!? ';
    return arr.map(char => ALPHABET[char]).join('');
}

// Refactored with reversed alphabet

function switcherRef(arr){
    const ALPHABET = ' ?!abcdefghijklmnopqrstuvwxyz.'.split('').reverse();
    return arr.map(char => ALPHABET[Number(char)]).join('');
}

// Test Cases

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']) === 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) === 'btswmdsbd kkw');
console.log(switcher(['4', '24', '27', '28']) === 'wc!?');

// console.log('abcdefghijklmnopqrstuvwxyz'.split('').reverse().join(''))
