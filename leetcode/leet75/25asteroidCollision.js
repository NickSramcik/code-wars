// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Constraints:

// 2 <= asteroids.length <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

// Declare a stack to store surviving asteroids
    // Loop through asteroid array
        // Add current asteroid to stack if it doesn't collide with previous asteroid in stack
        // If last & current collide w/ equal size, remove last asteroid in stack
        // If last & current collide w/ last being smaller, remove last asteroid in stack
            // Decrement index so current asteroid can be re-evaluated next iteration
// Return survivor stack

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const survivors = [];

    for (i = 0; i < asteroids.length; i++) {
        const current = asteroids[i],
              last = survivors[survivors.length - 1];
        
        if (!survivors.length || last < 0 || current > 0) {
            survivors.push(current);
        }
        else if (last + current == 0) {
            survivors.pop();
        }
        else if (Math.abs(last) < Math.abs(current)) {
            survivors.pop();
            i--;
        }
    }

    return survivors;
};

// Test Cases

console.log(asteroidCollision([5,10,-5]), '->', [5,10])
console.log(asteroidCollision([8,-8]), '->', [])
console.log(asteroidCollision([10,2,-5]), '->', [10])
