// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//PREP

//Pass in an array of numbers, with only one that shows up an odd number of times
//Return the integer that appears an odd number of times
//[1, 1, 1, 1, 4, 4, 4] -> 4

//Create a set of the array to gather unique values
//Using each value of the set, loop through original array and count its appearances
//If a value appears odd times, return it

// function findOdd(arr) {
//     const unique = new Set(arr)
//     let odd = unique.forEach(e => {
//         let count = arr.reduce((acc, cur) => cur === e ? acc++ : acc, 0)
//         if (count % 2 === 1) return e
//     })
//     return odd
//   }

// function findOdd(arr) {
//     const unique = new Set(arr)
//     let odd = unique.forEach(e => {
//         let count = 0
//         arr.forEach(a => {
//             if (a === e)
//                 count++
//         })
//         if (count % 2 == 1) return e
//     })
//     return odd
//   }

//None of the above work


//Somehow this works
const findOdd = arr => arr.reduce((acc, cur) => acc ^ cur);

//Sort the array first, then subtract each element from the last. All the even numbers cancel out leaving only the odd. 

const findOdd = arr => arr.sort((a, b) => b - a).reduce((acc, cur) => cur - acc);


//Find an item of the array where if you filter through the array where the items match, and the length of that filtered array is odd. 
function findOdd(arr) {
    return arr.find(item => arr.filter(e => e == item).length % 2)
}