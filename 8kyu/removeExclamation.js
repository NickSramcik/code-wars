// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


// Check last letter is exclamation, if so, return slice of every other letter

function remove (string) {
    if (string.slice(-1) === '!') { 
      return string.split('').slice(0, -1).join('')
    }else return string
  }

// One liner using turnary

const remove = string => string.slice(-1) === '!' ? string.split('').slice(0, -1).join('') : string;

// Don't need splits for slices
// Can use endsWith to check last letter

function remove (string) {
    if (string.endsWith('!')) { 
      return string.slice(0, -1)
    }else return string
  }

const remove = string => string.endsWith('!') ? string.slice(0, -1) : string;