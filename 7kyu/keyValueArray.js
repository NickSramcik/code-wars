// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Pass in an object
// Return an array with two sub-arrays: first with properties, second with values

// Store a result array with 2 empty subarrays
//      Loop through the properties of the input object
//      Push the property to 0th index of result array
//      Push the value to 1st index of result array
// Return result

function keysAndValues(data) {
    const result = [[], []];

    for (const property in data) {
        result[0].push(property);
        result[1].push(data[property]);
    }

    return result;
}

// Refactored using Object methods

function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}

// Test Cases

console.log(keysAndValues({a: 1, b: 2, c: 3}), '->', [['a', 'b', 'c'], [1, 2, 3]]);
console.log(keysAndValues({}), '->', [[], []]);
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}), '->', [['1', '2', '3'], ['a', 'b', 'c']]);
