// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

// Example 1:

// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// Example 2:

// keys = ['a', 'b', 'c']
// values = [1, 2, 3, 4]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

// Pass in 2 arrays (keys and values)
// Return an object

// Let dictionary be an empty object
// Loop through keys array
//   Set dictionary's key of keys[i] to values[i]
//     If values[i] is nullish, use null
// Return result

function createDict(keys, values) {
    const dictionary = {};

    for (let i in keys) {
        dictionary[keys[i]] = values[i] ?? null;
    }

    return dictionary;
}
