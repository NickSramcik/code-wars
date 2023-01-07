// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

// Pass in an array of numbers in sequence (constant difference between each) w/ 1 missing term
// Return that missing term (never first or last num)
// [3, 5, 7, 11] -> 9

// Store the difference between each term 
// (max - min) / array length === difference b/w each term
// Construct a new sequential array with that difference
// Loop through new array and return current value when it doesn't equal input array

function findMissing(list) {  
    const diff = (list[list.length - 1] - list[0]) / list.length;
    let realList = [];
    // Construct 'real' list
    for (k = list[0]; k <= list[list.length - 1]; k += diff) {
        realList.push(k);
    };
    // Loop through 'real' list to find missing value
    for (i = 0; i < realList.length; i++) {
        if (realList[i] !== list[i]) {
            return realList[i];
        };
    };
  }

// ^ Only works with increasing sequences
// Sort the input to always be increasing 

function findMissing(list) {  
    // Ensure that input array is in increasing order
    if (list[list.length - 1] < list[0]) {
        list.reverse();
    };
    const diff = (list[list.length - 1] - list[0]) / list.length;
    let realList = [];
    // Construct 'real' list
    for (k = list[0]; k <= list[list.length - 1]; k += diff) {
        realList.push(k);
    };
    // Loop through 'real' list to find missing value
    for (i = 0; i < realList.length; i++) {
        if (realList[i] !== list[i]) {
            return realList[i];
        };
    };
  }

// Refactored using arrow function
// Filter the input to find the value isn't starting value + index * diff
// Return that value - diff, because it's the value after the missing one
function findMissing(arr){
    const diff = (arr[arr.length - 1] - arr[0]) / arr.length;
    return arr.filter((e, i) => e !== arr[0] + i * diff)[0] - diff;
}

// One line because why not

const findMissing = (a, d = (a[a.length - 1] - a[0]) / a.length) => a.filter((e, i) => e != a[0] + i * d)[0] - d;