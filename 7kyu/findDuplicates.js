// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// Pass in an array
// Return an array

// Let set be an empty set
// Let result be an empty array
// Loop through input array
//   If element is in set and not in result, add it to result
//   If element is not in set, add it
// Return result

function duplicates(arr) {
    const set = new Set;
    const result = [];

    for (thing of arr) {
        if (set.has(thing) && !result.includes(thing)) result.push(thing);
        else if (!set.has(thing)) set.add(thing);
    }

    return result;
}
