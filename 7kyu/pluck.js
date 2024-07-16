// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
// If an object is missing the property, you should just leave it as undefined/None in the output array.

// Pass in an array of objects and a string
// Return array

// Let result be an empty array
// Loop through input array of objects
//      For each object, push input property value to result array
// Return result

function pluck(objs, name) {
    const result = [];

    for (obj of objs) {
        result.push(obj[name]);
    }

    return result;
}

// Refactored with map

const pluck = (objs, name) => objs.map(obj => obj[name]);
