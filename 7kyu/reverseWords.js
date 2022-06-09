// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//PREP

//Pass in a string of words
//Return the same string but with each word reversed
//'Ogres are like onions' -> 'sergO era ekil snoino'

//Split the string into an array of words, reverse each element, join into a string and return

// function reverseWords(str) {
//     return str.split(' ').map(word => word.reverse()).join(' ');
//   }

//Doesn't work, arrays can be reversed but strings can't

//Turn each word into an array and reverse that

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }

//More readable?

function reverseWords(str) {
    return str.split(' ').map(word => 
            word.split('').reverse().join(''))
        .join(' ');
  }


//Reverse everything, then reverse the words so each word appears in original order

const reverseWords = str => str.split('').reverse().join('').split(' ').reverse().join(' ');