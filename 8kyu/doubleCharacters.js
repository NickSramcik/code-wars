// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// Pass in a string
// Return the string with every character doubled
// 'shrek' -> 'sshhrreekk'

// Convert to array and map, turning each element into itself twice

function doubleChar(str) {
    return [...str].map(e => e + e).join('');
  }

// One line

const doubleChar = str => [...str].map(e => e + e).join('');