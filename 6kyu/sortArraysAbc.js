// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// Pass in an array of strings
// Return the string, sorted alphabetically (case insensitive)
// ['ogres', 'are', 'like', 'onions'] -> ['are', 'like', 'ogres', 'onions']

// Use a sort method, return -1 if second value is greater, 1 if first value is greater
// Lowercase a and b inside sort function to ignore casing

function sortme(names) {
    return names.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        return 0;
    });
}

// Refactored using locale compare

const sortme = names => names.sort((a, b) => a.localeComapre(b));
