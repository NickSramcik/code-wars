// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


function stringMerge(string1, string2, letter){
    const end = string1.split('').indexOf(letter)
    let firstHalf = string1.slice(0, end)
    const start = string2.split('').indexOf(letter)
    let secondHalf = string2.slice(start, string2.split('').length)
    return firstHalf + secondHalf
  }

// One liner —- you don't need to convert the strings to an array at all
// Second bound of slice doesn't need to be definited if boundless

const stringMerge = (a, b, c) => a.slice(0, a.indexOf(c)) + b.slice(b.indexOf(c));

// More readable?

const stringMerge = (a, b, c) =>
    a.slice(0, a.indexOf(c)) +
    b.slice(b.indexOf(c));

