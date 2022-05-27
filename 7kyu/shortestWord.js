// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//PREP

//Pass in a string of words
//Return a number, the length of the shortest word
//"Ogres are like onions" -> "are"

//Split the string into an array of words
//Sort array by word length
//Return the first index of the array's length

function findShort(s){
    let arr = s.split(' ').sort((a, b) => a.length - b.length);
    return arr[0].length;
}

// One liner

const findShort = s => s.split(' ').sort((a, b) => a.length - b.length)[0].length;

// Mapping the lengths and returning the min

const findShort = s => Math.min(...s.split(' ').map(e => e.length));