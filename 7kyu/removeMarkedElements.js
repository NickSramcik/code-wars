// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

// Pass in 2 arrays
// Return an array

// Declare an empty result array
// Loop through the first input list
//      if current value isn't in the remove array, push it to result
// Return result

Array.prototype.remove__ = function (list, remove) {
    const result = [];

    for (const item of list) {
        if (!remove.includes(item)) {
            result.push(item);
        }
    }

    return result;
};

// Refactored using filter method, arrow function syntax

Array.prototype.remove_ = (list, remove) => list.filter(item => !remove.includes(item));
