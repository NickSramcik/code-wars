// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// This don't work

// function getCount(str) {
//     return str.split('').reduce((a, c) => {c === 'a' || 
//                           c === 'e' || 
//                           c === 'i' ||
//                           c === 'o' ||
//                           c === 'u' ? ++a : a
// }, 0)
// }

// This DO work :)

// function getCount(str) {
//     return str.split('').reduce((a, c) => {
//         if (c === 'a' ||
//             c === 'e' ||
//             c === 'i' ||
//             c === 'o' ||
//             c === 'u') {
//                 return a + 1
//             }else return a
// }, 0)
// }

// One liner

const getCount = str => str.split('').filter(c => "aeiou".includes(c)).length