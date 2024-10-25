// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// Pass in 2 strings, jewels and stones — former representing which letters are jewels
// Return how many characters in the stones string are 'jewels'
// 'sh', 'shrek is an ogre' -> 3


var numJewelsInStones = function(jewels, stones) {
    // Create a map object and a variable to store a count
    const map = {};
    let count = 0;
    // Loop through each letter of jewels
    for (const jewel of jewels) {
        // Create a property for each in map object
        map[jewel] = true;
    };
    // Loop through each letter of stones
    for (const stone of stones) {
        // If letter is found inside map object, add 1 to count
        if (map[stone]) {
            count++;
        }
    };
    return count;
};


// Refactored to be shorter

function numJewelsInStones(jewels, stones, map = {}) {
    [...jewels].forEach(jewel => map[jewel] = true);
    return [...stones].reduce((count, stone) => map[stone] ? ++count : count, 0);
}

// Redux

// Pass in 2 strings
// Return a number

// let jewelMap be an empty set
// let jewelCount be 0
// Loop through each letter in the jewels string
//   Add each character to jewelMap
// Loop through each letter in the stones string
//    If stone is in jewelMap, increment jewelCounter
// Return jewelCounter

var numJewelsInStones = function(jewels, stones) {
    const jewelMap = new Set()
    let jewelCount = 0;

    for (jewel of jewels) {
        jewelMap.add(jewel)
    }

    for (stone of stones) {
        if (jewelMap.has(stone)) jewelCount++;
    }

    return jewelCount;
};

// Refactored

var numJewelsInStones = function(jewels, stones) {
    const jewelMap = new Set(jewels)
    return [...stones].reduce((acc, cur) => acc + jewelMap.has(cur), 0);
};
