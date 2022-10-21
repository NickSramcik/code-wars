// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// Pass in an array of numbers
// Return the largest sum of two elements in the array
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)

// Sort the array from largest to smallest and return the sum of the first two values. 


function largestPairSum(arr) {
    arr = arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

// With a destructured array

function largestPairSum(arr) {
    let [j, k] = arr.sort((a, b) => b - a);
    return j + k;
}