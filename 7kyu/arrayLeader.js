// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
// 17 is greater than the sum all the elements to its right side

// 5 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:
// 5 is greater than the sum all the elements to its right side

// 2 is greater than the sum all the elements to its right side

// Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
// Explanation:
// 0 is greater than the sum all the elements to its right side

// -1 is greater than the sum all the elements to its right side

// 3 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).


// Pass in an array of integers
// Return the "leader" element, the number that is greater than sum of all numbers to the right of it
// [1, 4, 5, 2, 2, 2, 1] -> 5

// Loop through the array. If an element is greater than the sum of the rest, push it to a new array. 
// Return that new array.

function arrayLeaders(numbers){
    let result = [];
    numbers.forEach((e, i) => {
        const sum = numbers.slice(i + 1).reduce((a, c) => a + c, 0);
        if (e > sum) result.push(e);
    });
    return result;
  }

// Using filter

function arrayLeaders(arr) {
    return arr.filter((e, i) => e > arr.slice(i + 1).reduce((a, c) => a + c, 0));
}

// One line

const arrayLeaders = arr => arr.filter((e, i) => e > arr.slice(++i).reduce((a, c) => a + c, 0));