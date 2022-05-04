// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// Convert to array, pop and shift (remove 1st and last element)
// Double ternary — If input is falsey or array is empty, return null
// Otherwise, join the array back into a string with spaces between

function array(str){
   let arr = str.split(',');
   arr.pop();
   arr.shift();
   return !str ? null : arr.length < 1 ? null : arr.join(' ')
}

//Much simpler using slice

function array(arr){
    return arr.split(',').slice(1, -1).join(' ') || null
}

//One liner

const array = arr => arr.split(',').slice(1, -1).join(' ') || null

