// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// Pass in two arrays of strings, a1 and a2
// Return strings in a1 that are a substring of one of the strings in a2
// ['rek', 'onion'], ['Shrek', 'Ogre'] -> ['rek']

function inArray(a1,a2){
    // Declare result array
    let result = [];
    // Nested loop to find a1 strings that are substrings of a2 strings
    for (i = 0; i < a1.length; i++) {
        for (j = 0; j < a2.length; j++) {
            if (a2[j].includes(a1[i])) {
                result.push(a1[i]);
            };
        };
    };
    // Return result, sort it and remove duplicates
    return [...new Set(result)].sort();
  }
// ^Quadratic O

// Using arr.some()

function inArray(a1, a2) {
    return a1.filter(needle => a2.some(haystack => haystack.indexOf(needle) > - 1)).sort();
}

// Refactored into arrow function

const inArray = (a1, a2) => a1.filter(n => a2.some(h => h.indexOf(n) > -1)).sort();

// ^ Probably still quadratic

// Stringify a2, then just loop through that with .indexOf()

function inArray(a1, a2) {
    let s2 = a2.join(' ');
    return a1.filter(e => s2.indexOf(e) > -1).sort();
}