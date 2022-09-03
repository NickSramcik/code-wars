// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:


// Pass in a string
// Return an array of two strings, alternating case with odd/even indexes
// 'Ogres have layers' -> ['OgReS HaVe lAyErS', 'oGrEs hAvE LaYeRs']

// Create an array, and push two values. Each mapping the string with case according to index. 

function capitalize(s){
    let arr = [];
    arr.push([...s].map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join(''));
    arr.push([...s].map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase()).join(''));
    return arr;
  };

// Constructing the array at the end

function capitalize(s){
    const even = [...s].map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join('');
    const odd = [...s].map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase()).join('');
    return [even, odd];
  };

// One line with a double map

const capitalize = s => [0,1].map(e => [...s].map((k, i) => i % 2 == e ? k.toUpperCase() : k).join(''));