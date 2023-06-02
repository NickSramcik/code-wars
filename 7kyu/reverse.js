// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// Pass in an array
// Return an array, input reversed
// [1, 2, 3] -> [3, 2, 1]

// Store an empty result array
// Loop through input backwards, pushing each element to result array
// Return result array

reverse = function (array) {
    const result = [];

    for (i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
};

// Refactored using reduceRight and arrow function

const reverse = arr => arr.reduceRight((a, c) => { return a.push(c), a}, []);
