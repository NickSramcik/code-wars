// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

// Pass in an array and a string
// Return an array of strings

// Let result be an array, filtered from the input array for strings that include the input string
// Lowercase both strings for case insensitivity
// If result has no length, return ['Empty'], otherwise return it as is

function wordSearch(query, arr) {
    const result = arr.filter(str => str.toLowerCase().includes(query.toLowerCase()));
    return result.length ? result : ['Empty'];
}
