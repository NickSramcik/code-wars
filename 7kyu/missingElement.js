// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

// Pass in 2 arrays
// Return a number

// let map1 & map2 be empty objects
// Loop through each array and map their elements using object maps
// Loop through a map, comparing each value to other map, and return a value if they aren't equal

function findMissing(arr1, arr2) {
    const map1 = {};
    const map2 = {};

    for (let num of arr1) {
        map1[num] = map1[num] + 1 || 1;
    }

    for (let num of arr2) {
        map2[num] = map2[num] + 1 || 1;
    }

    for (num in map1) {
        if (map1[num] !== map2[num]) return +num; 
    }
}

// Refactored

// Return the difference between each array, reduced

function findMissing(arr1, arr2) {
    const sum = arr => arr.reduce((a, c) => a + c, 0);
    return sum(arr1) - sum(arr2);
}
