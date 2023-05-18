// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// Pass in an object, a hash of key value pairs
// Return a string, listing those key value pairs with a comma separator
// {a: 1, b: '2'} -> "a = 1,b = 2"

// Store an empty result array
// Loop through the key value pairs of the input object
//  Push a string to the result array, a string of each property and its value
// Join the result array into a string, using comma separator, and return it

function solution(pairs){
    let result = [];

    for (property in pairs) {
        const string = property + ' = ' + pairs[property];
        result.push(string);
    }

    return result.join(',');
}

// Refactored using arrow functions and a map

const solution = obj => Object.keys(obj).map(prop => `${prop} = ${obj[prop]}`).join(',');
