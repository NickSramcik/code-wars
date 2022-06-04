// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//PREP

//Pass in an array of integers. Some may be empty. 
//Return string "odd" or "even" according to sum of array
//[0, 1, 2, 3] -> 'even'

//Check for empty array, consider even sum
//Sum the array
//Check modulus of array and return


function oddOrEven(array) {
    if (array.length < 1) return 'even';
    let sum = array.reduce((acc, cur) => acc + cur);
    return sum % 2 === 0 ? 'even' : 'odd';
 }

//One Line
//Setting a starting point for reduce takes care of empty arrays (the second argument after the function is passed in)

const oddOrEven = arr => arr.reduce((a, c) => a + c, 0) % 2 == 0 ? 'even' : 'odd';