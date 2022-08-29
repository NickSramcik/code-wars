// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!


// Pass in a string of words
// Return the string with the order of words reversed 
// 'Ogres are like onions.' -> 'onions. like are Ogres'

// Split the string into an array of words, reverse that array, join and return

function reverse(string){
    return string.split(' ').reverse().join(' ');
  }

// One line

const reverse = str => str.split(' ').reverse().join(' ');