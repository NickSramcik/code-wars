// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?


// Pass in an array of numbers
// Return the majority element (appears more often than not)
// [1, 1, 1, 2, 50, 50] -> 1

// Brute force method

function majorityElement(arr) {
    // Loop through input array to run another loop for each element
    for (num of arr) {
        // Count the amount of elements equal to root element
        let count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == num) count++;
        };
        // If count >= arr.length / 2, return root element
        if (count >= arr.length / 2) return num;
    };
}


// Create a hash map of values in the input array, count appearances of each number
// Loop through the hash map and find a property whos value >= arr.length / 2

function majorityElement(arr) {
    const numsMap = {};
    for (num of arr) {
        numsMap[num] = numsMap[num] + 1 || 1;
    };

    for (num in numsMap) {
        if (numsMap[num] >= arr.length / 2) {
            return num;
        };
    };
}

// Refactored to use just one for loop

function majorityElement(arr) {
    const numsMap = {};
    for (num of arr) {
        numsMap[num] = numsMap[num] + 1 || 1;
        if (numsMap[num] >= arr.length / 2) return num;
    };
}

// Sort the array and return the middle element
// [1, 2, 1, 3, 1] -> [1, 1, 1, 2, 3]
// Majority element will always be in the middle

const majorityElement = arr => {
    const middleElement = Math.floor(arr.length / 2);
    arr.sort();
    return arr[middleElement];
}