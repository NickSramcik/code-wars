// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// Pass in an array of numbers, and positive integer N
// Return the array with any element that appears more than N times removed
// [1, 1, 1, 2, 2, 3, 3, 3], 2 -> [1, 1, 2, 2, 3, 3]

// Loop through the array
// Create a hash map, which stores how often each element has appeared
// If current element's frequency <= n, push it to new array
// Return new array

function deleteNth(arr, n){
    const map = {};
    let result = [];
    for (e of arr) {
        map[e] = ++map[e] || 1;
        if (map[e] <= n) result.push(e);
    }return result;
  }

// Using a filter to create new array

function deleteNth(arr, n){
    const map = {};
    return arr.filter(e => {
        map[e] = ++map[e] || 1;
        return map[e] <= n;
    });
  }

// Refactored into arrow function

const deleteNth = (arr, n, map = {}) => arr.filter(e => {map[e] = ++map[e] || 1; return map[e] <= n});