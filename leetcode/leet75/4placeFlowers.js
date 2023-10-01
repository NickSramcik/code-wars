// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

// Store an empty counter, newFlowers
// Loop through input array
    // if current value is 0, and both prev and next values are also 0, increment counter and change current value to 1
// Return boolean, whether newFlowers >= n

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let newFlowers = 0;

    for (i = 0; i < flowerbed.length; i++) {
        const current = flowerbed[i],
              prev = flowerbed[i - 1],
              next = flowerbed[i + 1];

        if (!current && !prev && !next) {
            newFlowers++;
            flowerbed[i] = 1;
        }
    }

    return newFlowers >= n;
};

// Test Cases
console.log(canPlaceFlowers([1,0,0,0,1], 1), '->', true);
console.log(canPlaceFlowers([1,0,0,0,1], 2), '->', false);
console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3), '->', true);
