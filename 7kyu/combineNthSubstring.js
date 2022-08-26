// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// Pass in an array of words
// Return a new word formed with the nth character of each word
// ['Shrek', 'has', 'layers'] -> Shl


// Map the array, with each element becoming the nth character of each word, join and return

function nthChar(words){
    return words.map((e, i) => e.charAt(i)).join('');
   }

// One line

const nthChar = arr => arr.map((e, i) => e[i]).join('');

// Using a reduce

const nthChar = arr => arr.reduce((a, c, i) => a + c[i], '');