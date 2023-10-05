// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;

    // Store 2 values to keep track of the 2 smallest values, start at infinity
    let smallest = Infinity,
        secondSmallest = Infinity;
    
    // Loop through input array
    for (currentNum of nums) {
        // If current value <= to smallest value, set smallest to current value
        if (currentNum <= smallest) {
            smallest = currentNum;
        }
        // Otherwise, if current value <= to second smallest value, set second smallest to current value
        else if (currentNum <= secondSmallest) {
            secondSmallest = currentNum;
        }
        // Otherwise, current value is larger than both smallest and second smallest values, so there must be a valid triplet
        else return true;
    }
    // Loop's finished, there was never a 3rd value found that was larger than 2 smallest stored values, so there are no triplets
    return false;
};

// Refactored

var increasingTriplet = function (nums) {
    let smallest = Infinity,
        secondSmallest = Infinity;
    
    for (currentNum of nums) {
        if (currentNum > secondSmallest) return true;

        if (currentNum > smallest) {
            secondSmallest = currentNum;
        }else smallest = currentNum;
    }
    return false;
}

// Test Cases

console.log(`${increasingTriplet([1,2,3,4,5])} -> true`)
console.log(`${increasingTriplet([5,4,3,2,1])} -> false`)
console.log(`${increasingTriplet([2,1,5,0,4,6])} -> true`)
