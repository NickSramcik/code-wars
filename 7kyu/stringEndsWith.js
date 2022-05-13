// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//PREP

//Parameters, returns, example, pseudo code

//string, ending

//true / false bool

//Return whether or not str ends with ending

function solution(str, ending){
    return str.endsWith(ending)
  }

// One liner

const solution = (str, ending) => str.endsWith(ending)

// Using slice

// Slice from the end, with as many characters as the ending parameter has

function solution(str, ending){
    // Test wants empty ending to return true so check for that
    if (!ending.length) return true
    return str.slice(0 - ending.length) === ending;
  }