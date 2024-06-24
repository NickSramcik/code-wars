// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// Pass in objects
// Return 1 object

// Declare empty result object
// Loop througn input objects
//   For each value, set or increment current value depending if already existing
// Return result

function combine() {
    const result = {},
          objs = [...arguments];

    for (object of objs) {
        for (prop in object) {
            result[prop] = result[prop] + object[prop] || object[prop];
        }
    }

    return result;
}
