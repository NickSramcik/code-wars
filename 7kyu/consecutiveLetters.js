// Check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
// All inputs will be lowercase letters.

// Pass in a string
// Return boolean

// Let sorted be a alphabetically sorted version of input string
// Loop through each letter of the input string
//      let current be character code of current letter
//      let prev be character code of previous letter
//      if current is NOT prev + 1, return false
// return true 

function solve(str){
    const sorted = str.split('').sort().join('');

    for (i = 1; i < sorted.length; i++) {
        const current = sorted[i].charCodeAt();
        const prev = sorted[i - 1].charCodeAt();
        if (current !== prev + 1) return false;
    }

    return true;
}

function solve(str) {
    const ABC = 'abcdefghijklmnopqrstuvwxyz';
    const sorted = [...str].sort().join('');
    return ABC.includes(sorted);
}

// Test Cases

console.log(solve('abc'), true)
console.log(solve('abd'), false)
console.log(solve('aabc'), false)
console.log(solve('c'), true)
console.log(solve('dabc'), true)
