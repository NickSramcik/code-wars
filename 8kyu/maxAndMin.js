// make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.


//Pass in an array of numbers (no empty arrays)
//Return an integer, the minimum or maximum of the input array
//max[1, 2, 3] -> 3

//Use Math methods to find min and max

const min = arr => Math.min(...arr);

const max = arr => Math.max(...arr); 

//Using a sort

const min = arr => arr.sort((a, b) => a - b)[0];
const max = arr => arr.sort((a, b) => b - a)[0];