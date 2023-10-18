// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// Create a hash map. Loop through input array and set value to 1 or increment it
// Create another hash map of occurences. If any number of occurences already exists, return false
// Return true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const numMap = {},
          occurMap = {};

    for (num of arr) {
        numMap[num] = numMap[num] + 1 || 1;
    }

    for (num in numMap) {
        const occurrence = numMap[num];

        if (occurMap[occurrence]) return false;
        occurMap[occurrence] = 1;
    }

    return true;
};

// Refactored with map & set methods

var uniqueOccurrences = function(arr) {
    const numMap = new Map(),
          occurSet = new Set();

    for (num of arr) {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        }
        else numMap.set(num, 1);
    }

    for (occurrence of numMap.values()) {
        if (occurSet.has(occurrence)) return false;
        occurSet.add(occurrence);
    }

    return true;
};

// Test Cases

console.log(uniqueOccurrences([1,2,2,1,1,3]), '->', true)
console.log(uniqueOccurrences([1,2]), '->', false)
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]), '->', true)
