// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// Pass in an object
// Return an array of arrays

// Return input object entries

function convertHashToArray(hash) {
    return Object.entries(hash);
}

// You can also point straight to the built-in method like:

const convertHashToArray = Object.entries;
