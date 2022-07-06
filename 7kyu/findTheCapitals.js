// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Pass in a string of letters
// Return an array of indices of each letter that is capital
// 'OgrEs are like onions.' -> [0, 3]

// Create a new array and push the index of each element that is a capital letter

var capitals = function (word) {
	let arr = []
    word.split('').forEach((element, index) => {
        if (element === element.toUpperCase()) 
            arr.push(index)
    })
    return arr;
};

// One liner
// Convert to array and map the indices of capital letters
// Filter out the elements that aren't capital (which are set to -1)

const capitals = str => [...str].map((e, i) => e == e.toUpperCase() ? i : -1).filter(e => e != -1);