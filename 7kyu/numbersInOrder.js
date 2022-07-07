// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// Pass in an array of positive integers
// Return boolean, whether the numbers are in ascending order
// 1, 2, 4, 6 -> true    1, 2, 6, 5 -> false      4, 3, 2, 1 -> false

// Sort the input and compare the sorted array with the input 

function inAscOrder(arr) {
   return arr.join('') === arr.sort((a, b) => a - b).join('');
  }

// One liner 
const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');

// Using a loop to check if any element is smaller than the last

function inAscOrder(arr) {
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }return true;
};

// Using every, which checks if every element passes a test (basically doing the same as previous but shorter)
// Have to account for the first element, so use an or to let i=0 return a true

const inAscOrder = arr => arr.every((_, i) => i==0 || arr[i] > arr[i-1]);

// Usince slice to account for the first element
// Sliced array is shifted by 1 with that slice, so you don't need an [i-1]

const inAscOrder = arr => arr.slice(1).every((e, i) => e > arr[i]);