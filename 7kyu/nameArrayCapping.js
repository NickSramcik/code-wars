// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// Pass in an array of strings
// Return an array of strings

// Map the input array using each word
// Slice the first letter, capitalize it, concat with rest of word lowercased 
// Return result

function capMe(names) {
    return names.map(name => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
}
