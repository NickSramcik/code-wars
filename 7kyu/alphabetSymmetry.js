// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Pass in an array of strings
// Return an array of numbers, with each number being a count of the letter in each input string who's abc order matches the index + 1
// ["abide","ABc","xyz"] -> [4,3,0]

// Return a map of the array
// For each string, reduce the string
// Lowercase the letter, get its character code - 96 to get abc position, and increment acc if it matches its index + 1

function solve(arr) {
    return arr.map(str =>
        [...str].reduce(
            (acc, cur, i) =>
                cur.toLowerCase().charCodeAt(0) == i + 97 ? ++acc : acc, 0
        )
    );
}

// Refactored using abc position storage

function solve(arr) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    return arr.map(str =>
        [...str].reduce(
            (acc, cur, i) =>
                abc.indexOf(cur.toLowerCase()) == i ? ++acc : acc, 0
        )
    );
}
