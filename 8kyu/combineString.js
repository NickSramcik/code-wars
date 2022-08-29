// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'


// Pass in two strings
// Return the two input strings concatenated 
// 'Ogre', 'Onion' -> 'Ogre Onion'


// Use a template literal to concatenate the strings with a space

const combineNames = (s1, s2) => `${s1} ${s2}`;

// Using a spread
// This will work with any number of inputs

const combineNames = (...names) => names.join(' ');
