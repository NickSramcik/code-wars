// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//Pass in 2 strings, each only lowercase letters a to z
//Return a sorted string containing unique letters from both strings

// 'shrek', 'onion' -> 'ehiknors'

//Concatenate input strings and create a set with it. Sort the set and return as string

function longest(s1, s2) {
    let foo = new Set(s1 + s2);
    return Array.from(foo).sort().join('');
  }

//One liner
//Using ... converts a set to an array much easier

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

//Using filter
//Sort the array, filter out elements that equal the previous element to remove duplicates

function longest(s1, s2) {
    let arr = (s1 + s2).split('').sort();
    arr = arr.filter((e, i, arr) => e !== arr[i -1]).join('');
  }