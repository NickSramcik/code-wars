// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


// Pass in two arrays of strings
// Return the maximum difference between lengths of strings within array 1 and array 2
// ['123', '1234'], ['123', '1'] -> 3 

// Create a new array to store differences between strings in each array
// Loop through each matchup, push the lengths into that new array
// Return the max difference

function mxdiflg(a1, a2) {
    if (a1.length < 1 || a2.length < 1) return -1;
    let diff = [];
    a1.forEach(e => {
        for (k of a2) {
            diff.push(Math.abs(e.length - k.length))
        } 
    });
    return Math.max(...diff);
}

// Using two maps to find the biggest difference without checking every possiblity 

function mxdiflg(a1, a2) {
    if (a1.length < 1 || a2.length < 1) return -1;
    const l1 = a1.map(e => e.length),
          l2 = a2.map(e => e.length);
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}