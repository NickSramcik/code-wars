// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


// Pass in a string
// Remove all ! from string, and add one to the end
// 'Ogre!s are! like! !onions' -> 'Ogres are like onions!'

// Split the string by exlamations, join, concatenate a ! to the end, and return


function remove (string) {
    return string.split('!').join('') + '!';
  }

// One line using template literal

const remove = str => `${str.split('!').join('')}!`