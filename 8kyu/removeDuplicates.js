// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Pass in an array of numbers
// Return the array of numbers without duplicates
// [1, 2, 3, 4, 5, 1] -> [1, 2, 3, 4, 5]

// Create a new set of the array
// Convert that set into an array & return it

function distinct(a) {
    return [...new Set(a)];
  }

// Refactored into arrow function

const distinct = a => [...new Set(a)];

// Filter the array for values whos index equals the first index of that character

function distinct(a) {
    return a.filter((e, i) => i == a.indexOf(e));
  }

// Create a hash map to store values of the array
// If element isn't in the map, add it to the map with value of its index
// Filter array to values whos index equals index in map

function distinct(array) {
    const arrayMap = {};
    
    for (i = 0; i < array.length; i++) {
        if (arrayMap[array[i]] === undefined) {
            arrayMap[array[i]] = i;
        };
    };

    return array.filter((number, index) => index == arrayMap[number]);
  }