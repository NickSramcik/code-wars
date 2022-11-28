// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


// Pass in a string of words
// Return the string w/ every other word reversed. Remove whitespace, one space b/w each word
// '  Ogres are like onions     ' -> 'Ogres era like snoino'

// Trim the string and split into array of words. 
// Map array -> if index is odd, reverse the element. Join & return

function reverse(str){
    return str.trim().split(' ').map((e, i) => i % 2 ? e.split('').reverse().join('') : e).join(' ');
  }

// Refactored into arrow function

const reverse = s => s.trim().split(' ').map((e, i) => i % 2 ? [...e].reverse().join('') : e).join(' ');

// You can use backticks for split and join

const reverse = s => s.trim().split` `.map((e, i) => i % 2 ? [...e].reverse().join`` : e).join` `;

let string = ' ';

string.split(' ').join('');

string.split` `.join``;