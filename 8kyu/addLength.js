// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// Pass in a string
// Return of an array of strings, with the length of the string added to the end w/ space
// 'Ogres have layers' -> ['Ogres 5', 'have 4', 'layers 6']

// Split the string into an array of words
// Map this array. Concatenate a space with the length of it. 
// Return result array

function addLength(str) {
    return str.split(' ').map(e => e + ' ' + e.length);
}

// refactored into arrow function

const addLength = str => str.split(' ').map(e => e + ' ' + e.length);