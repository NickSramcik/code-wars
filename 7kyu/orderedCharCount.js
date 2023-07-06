// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Pass in a string
// Return an array of arrays, with each child array containing a string and a number
// 'shrek' -> [['s', 1], ['h', 1], ['r', 1], ['e', 1], ['k', 1]]

// Declare a character map and an empty result array
// Loop through input string
//      If current character is in map, increment its value
//      If it isn't, creeate it and set it to 1
//      If character is a number, add n to key name to preserve order
// Loop through the map, creating arrays of keys and values and pushing them to result array
// Return the result array

const orderedCount = function (text) {
    const charMap = {};
    let result = [];

    for (character of text) {
        if (typeof +character == 'number') {
            charMap['n' + character] = charMap['n' + character] + 1 || 1;
        }
        
        else charMap[character] = charMap[character] + 1 || 1;
    }

    for (character in charMap) {
        if (character[0] == 'n') {
            result.push([character.slice(1), charMap[character]]);
        }
        
        else result.push([character, charMap[character]]);
    }

    return result;
};

// Refactored using a set and a map
// Count occurences by splitting the character and using length
// This solution is less efficient

function orderedCount(text) {
    return [...new Set([...text])].map(char => [char, text.split(char).length - 1]);
}
