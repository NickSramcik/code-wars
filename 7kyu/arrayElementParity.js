// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3
//// [-2, -1, 1, 2, 3]

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4
//// [-4, -3, -2, -1, 1, 2, 3]

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// Pass in an array of integers
// Return an integer, the one that does not have a pair

// Sort the array from least to greatest
// Use two pointers to iterate throught the array from either end (left, right)
// When absolute values of each pointer are equal, move pointers
// If left > right, left has no match. Return left. 
// If left < right, right has no match. Return right.

function solve(arr) {
    if (arr.length < 2) return arr[0];

    let left = 0,
        right = arr.length - 1;

    arr.sort((a, b) => a - b);
    
    while (left < right) {
        const absLeft = Math.abs(arr[left]),
              absRight = Math.abs(arr[right]);

        if (arr[left] !== arr[right]  * -1) {
            if (absLeft >= absRight) return arr[left];
            if (absLeft < absRight) return arr[right];
        }
        
        left++;
        right--;
    }
}

// Refactored without caring about efficiency
const solve = array => array.find(num => !array.includes(-num));

// Test Cases

console.log(solve([1, -1, 2, -2, 3]), '->', 3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), '->', -4);
console.log(solve([1, -1, 2, -2, 3, 3]), '->', 3);
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]), '->', -38);
