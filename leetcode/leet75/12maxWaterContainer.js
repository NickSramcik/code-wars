// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Store a left pointer, a right pointer, and a maxVolume variable set to 0
    let left = 0,
        right = height.length - 1,
        maxVolume = 0;
    // Loop through height array, while left < right
    while (left < right) {
        // Calculate and store width (right - left), height (min value of each pointer), and volume (height * width)
        const width = right - left,
              realHeight = Math.min(height[left], height[right]),
              volume = width * realHeight;
        // If volume > maxVolume, set maxVolume to current volume
        if (volume > maxVolume) maxVolume = volume;
        // If left height < right height, advance left pointer. Otherwise, advance right pointer. 
        height[left] < height[right] ? left++ : right--;
    }
    // Return maxVolume
    return maxVolume;
};

// Test Cases

console.log(maxArea([1,8,6,2,5,4,8,3,7]), '->', 49)
console.log(maxArea([1,1]), '->', 1)
