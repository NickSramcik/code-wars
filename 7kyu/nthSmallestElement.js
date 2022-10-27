// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 


// Pass in an array and n (positive integer)
// Return the nth smallest element in the array
// [1,2,3,4,5], 3 -> 3

// Sort the array from smallest to largest, then return the nth - 1 element
function nthSmallest(arr, pos){
    return arr.sort((a, b) => a - b)[pos + 1];
  }

// Refactored into arrow function

const nthSmallest = (arr, n) => arr.sort((a, b) => a - b)[--n];