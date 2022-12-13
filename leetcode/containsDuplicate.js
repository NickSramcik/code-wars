// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Pass in an array of integers
// Return boolean, whether the input array contains a duplicate
// [1, 1, 2, 3, 4, 5] -> true

// Create a set with the input, return whether the input length does NOT match the set size (no duplicates)

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

// refactored into arrow function

const containsDuplicate = arr => new Set(arr).size !== arr.length;

// Using a hash map

// Create an empty object 'numsMap'
// Loop through input array. If any element of input array already exists, there is a dupe. Return true.
// If current element has no property in map, set one and move on. 
// If the loop finishes, there are no duplicates. Return false. 

function containsDuplicate(nums) {
    const numsMap = {};
    for (e of nums) {
        if (numsMap[e]) return true;
        numsMap[e] = true;
    }return false;
}

// Brute force

function containsDuplicate(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j ++) {
            if (i !== j && arr[i] === arr[j]) return true;
        };
    }return false;
}
