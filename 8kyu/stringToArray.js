// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


// Pass in a string
// Return an array of strings of each word
// 'Ogres have layers' -> ['Ogres', 'have', 'layers']

// Split the string and return

function stringToArray(string){
    return string.split(' '); 
}

// One Liner

const stringToArray = str => str.split(' ');