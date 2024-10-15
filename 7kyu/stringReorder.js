// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

// Output:
// 'Vatsan took his dog for a spin'

// Pass in an array of objects
// Return a string

// Let result be an empty array
// Sort the input array by its object keys
// Loop through the input array
//   Push each object value to the result array
// Return the result array joined with a space separator

function sentence(arrayOfObjects) {
    const result = [];
    arrayOfObjects.sort((a, b) => Object.keys(a) - Object.keys(b));

    for (obj of arrayOfObjects) {
        result.push(Object.values(obj));
    }

    return result.join(' ');
}

// Refactored using map

function sentence(arrayOfObjects) {
    return arrayOfObjects.sort((a, b) => Object.keys(a) - Object.keys(b))
                         .map(obj => Object.values(obj))
                         .join(' ');
}

// Testing

let objs = [ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ]
console.log(objs.sort((a, b) => Object.keys(a) - Object.keys(b)))