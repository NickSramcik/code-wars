// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // Store left & right pointers set to 1, and a count of zeroes left set to 1
    let left = 0,
        right = 0,
        zeroes = 1;
    // Loop through input array, while right < nums.length
    while (right < nums.length) {
        // If value @ right is 0, decrement zeroes count
        if (nums[right] == 0) zeroes -= 1;
        // Advance right pointer
        right += 1;
        // If zeroes < 0, increment zeroes if left value is 0, and advance left pointer
        if (zeroes < 0) {
            if (nums[left] == 0) zeroes += 1;
            left += 1;
        }
    }
    // Return right - left - 1, giving us our longest subarray
    return right - left - 1;
};

// Test Cases

console.log(longestSubarray([1,1,0,1]), '->', 3)
console.log(longestSubarray([1,1,1]), '->', 2)
