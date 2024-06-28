// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works:

// [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
// The map method does not mutate the original array.

// (x => x ** 2)
// Pass in a callback function
// Return an array

// Let result be []
// Loop through this (the array we're mapping)
//   Apply callback function to each value
//   Push that to result array
// Return result

Array.prototype.map = function(callbackFn) {
    const result = [];

    for (let value of this) {
        result.push(callbackFn(value));
    }

    return result;
}
