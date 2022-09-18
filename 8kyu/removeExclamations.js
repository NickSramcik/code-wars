// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Pass in a string
// Return the string with all exclamation marks removed
// 'Shrek is King!' -> 'Shrek is King'

// Convert string to array, filter out elements that equal '!', convert back to string & return

function removeExclamationMarks(s) {
    return s.split('').filter(e => e != '!').join('');
  }

// One line

const removeExclamationMarks = s => [...s].filter(e => e != '!').join('');

// Split the bang

const removeExclamationMarks = s => s.split('!').join('');

