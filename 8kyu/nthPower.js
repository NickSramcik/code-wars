// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// Pass in an array of positive integers and positive integer n
// Return nth index of array to the power of n
// [1, 2, 3, 4], 2 -> 3^2 == 9

// if n >= array length, return -1
// Return array index n to the power n

function index(array, n){
    if (n >= array.length) return -1;
    return array[n] ** n;
  }

// Refactored into arrow function

const index = (arr, n) => n >= arr.length ? -1 : arr[n] ** n;

// Shorter w/ default return for falsey results

const index = (arr, n) => arr[n] ** n || -1;