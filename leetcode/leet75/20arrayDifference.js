// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

// Store 2 empty maps for each input array
// Store 2 empty result arrays for the numbers distinct in each map 
// Loop through each array to add numbers from each to their map
// Loop through each map, push each number to respective result array if not in the other map
// Return the result arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifferenceOld = function(nums1, nums2) {
    const map1 = {},
          map2 = {},
          distinct1 = [],
          distinct2 = [];

    for (num of nums1) {
        map1[num] = map1[num] + 1 || 1;
    }

    for (num of nums2) {
        map2[num] = map2[num] + 1 || 1;
    }

    for (num in map1) {
        if (!map2[num]) distinct1.push(Number(num));
    }

    for (num in map2) {
        if (!map1[num]) distinct2.push(Number(num));
    }

    return [distinct1, distinct2];
};

// Refactored using sets

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1),
          set2 = new Set(nums2),
          distinct1 = [],
          distinct2 = [];

    for (num of [...set1, ...set2]) {
        if (!set2.has(num)) distinct1.push(num);
        if (!set1.has(num)) distinct2.push(num);
    }

    return [distinct1, distinct2];
};

// Test Cases

console.log(findDifference([1,2,3], [2,4,6]), '->', [[1,3],[4,6]])
console.log(findDifference([1,2,3,3], [1,1,2,2]), '->', [[3],[]])
