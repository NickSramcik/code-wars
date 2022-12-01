// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Pass in an array of strings
// Return the array with each string havings consecutive duplicate letters removed
// dup(["kelless","keenness"]) = ["keles","kenes"]

// Map the array. Remove duplicate letters of each element. (Filter elements that don't equal the next element)

const rmDup = w => [...w].filter((e, i, a) => e != a[++i]).join('');
const dup = s => s.map(e => rmDup(e));

// Refactored into one line

const dup = a => a.map(w => [...w].filter((e, i, a) => e != a[++i]).join(''));