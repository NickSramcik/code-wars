// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//PREP

//Pass in a string, string can be empty
//Return boolean, do any letters repeat? Isograms have no repeats, case insensitive
//abcde -> true, abcdea -> false, abcdeA -> false

//Split string into an array. Loop through array and filter elemetns that show up again. Return whether filtered array contains no elements. (No elements means no repeats)


function isIsogram(str){
    let arr = str.split('').filter((e, i) => str.toLowerCase().slice(i+1).includes(e.toLowerCase()))
    return arr.length === 0
  }

// One liner

const isIsogram = str => 
    str.split('').filter((e, i) => str.toLowerCase().slice(i+1).includes(e.toLowerCase())).length === 0;

//Using Sets
//A set object stores unique values, so if the set size equals string length, there are no repeats

function isIsogram(str){
    return new Set(str.toUpperCase()).size === str.length;
  }

//One Liner

const isIsogram = str => new Set(str.toUpperCase()).size === str.length;