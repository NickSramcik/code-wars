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

function oldduplicateEncode(word) {
    let arr = word.split('');
    return arr
        .map((e, i) => {
            if (
                arr.reduce(
                    (a, c) =>
                        c.toLowerCase() === arr[i].toLowerCase() ? a + 1 : a,
                    0
                ) === 1
            ) {
                return '(';
            } else return ')';
        })
        .join('');
}

// Using some method, which checks if at least one element passes a test
// Checking that the indexes aren't equal, so it's not including itself

const olddduplicateEncode = str => {
    let arr = str.toLowerCase().split('');
    return arr
        .map((e, i) => (arr.some((k, j) => e === k && i !== j) ? ')' : '('))
        .join('');
};

// Using indexOf and lastIndexOf
// Quadratic big O

function oldduplicateEncode(str) {
    return str
        .toLowerCase()
        .split('')
        .map((e, _, a) => (a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')'))
        .join('');
}

// Optimized using a hash map

function oldduplicateEncode(word) {
    let count = {};
    [...word.toLowerCase()].forEach(e =>
        count[e] ? (count[e] += 1) : (count[e] = 1)
    );
    return word
        .toLowerCase()
        .split('')
        .map(e => (count[e] > 1 ? ')' : '('))
        .join('');
}

// Redux

// Pass in a string
// Return a string

// Ignore case

// Lowercase the input word
// Convert word into an array of letters
// Map the letters:
//   Single occurence letters become '('
//   Repeated letters become ')'
// Join the letters back into a string, no separator
// Return the result

// O(n^2) quadratic

function oldduplicateEncode(word) {
    word = word.toLowerCase();
    const letters = word.split('');
    return letters.map(letter => letters.indexOf(letter) == letters.lastIndexOf(letter) ? '(' : ')').join('');
}

// O(2n) -> O(n) linear

function duplicateEncode(word) {
    word = word.toLowerCase();
    const letterMap = {};
    let result = [];

    for (letter of word) {
        letterMap[letter] = letterMap[letter] + 1 || 1;
    }

    for (letter of word) {
        if (letterMap[letter] == 1) {
            result.push('(');
        }else if (letterMap[letter] > 1) {
            result.push(')');
        }
    }

    return result.join('');
}

// Test Cases

console.log(duplicateEncode('din'), '->', '(((');
console.log(duplicateEncode('recede'), '->', '()()()');
console.log(duplicateEncode('Success'), '->', ')())())');
console.log(duplicateEncode('(( @'), '->', '))((');
