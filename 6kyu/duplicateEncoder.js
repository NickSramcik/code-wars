// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Pass in a string
// Return a string, coded, ( if the letter is unique, ) if not. Ignore casing
// 'onions have layers' -> ')(())))()())()()()'

// Split string into array, map, return ( if unique, ) if not, join & return
// Using reduce to see if only 1 element in the string matches another element in that string

function duplicateEncode(word){
    let arr = word.split('');
    return arr.map((e, i) => {
        if (arr.reduce((a, c) => c.toLowerCase() === arr[i].toLowerCase() ? a + 1 : a, 0) === 1) {
            return '(';
        }else return ')';
    }).join('');
}

// Using some method, which checks if at least one element passes a test
// Checking that the indexes aren't equal, so it's not including itself

const duplicateEncode = str => {
    let arr = str.toLowerCase().split('');
    return arr.map((e, i) => arr.some((k, j) => e === k && i !== j) ? ')' : '(').join('');
}

// Using indexOf and lastIndexOf
// Quadratic big O

function duplicateEncode(str) {
    return str.toLowerCase()
              .split('')
              .map((e, _, a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')')
              .join('');
}

// Optimized using a hash map

function duplicateEncode(word){
    let count = {};
    [...word.toLowerCase()].forEach(e => count[e] ? count[e] += 1 : count[e] = 1);
    return word.toLowerCase().split('').map(e => count[e] > 1 ? ')' : '(').join('');
}