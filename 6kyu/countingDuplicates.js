// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// Pass in a string
// Return how many characters appear more than once (ignore case)
// 'shrek is king' -> 3 (s, i, k)

// Loop through the array, shifting the first element each time. 
// If the input array includes that shifted element, add it to a new array
// Remove duplicates from new array, and return the length. 

function duplicateCount(text){
    let duplicates = [];
    text = [...text.toLowerCase()];
    text.forEach(e => {
        let letter = text.shift();
        if (text.includes(letter)) duplicates.push(letter);
    });
    return [...new Set(duplicates)].length;
  }

// Filter the array, keeping only values whos index is not the first apperance, AND is the last appearance

const duplicateCount = s => 
    [...s.toLowerCase()].filter((e, i, a) => a.indexOf(e) != i && a.lastIndexOf(e) == i).length;

// Create an object with a reduce method, with each character gaining its own property
// Use each character property to count how many times it appears
// Filter that object into an array of properties whos values are > 1, return the length

// Inside the reduce function, check if the accumulator object already has a property equaling the current letter
// If it does, add one to its value. Otherwise, create one and set it to 1. 

function duplicateCount(text) {
    let count = [...text.toLowerCase()].reduce((a, c) => {
        a[c] ? a[c] += 1 : a[c] = 1;
        return a;
    }, {});
    return Object.keys(count).filter(e => count[e] > 1).length;
}
