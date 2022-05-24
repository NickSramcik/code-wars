// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//PREP

//Pass in array of positive integers and strings
//Return same array but with only numbers
//[a, b, 3] -> [3]

//Loop through array and filter out the strings 

function filter_list(l) {
    return l.filter(e => Number(e) === e)
  }

// Number(e) is the same as +e

function filter_list(l) {
    return l.filter(e => +e === e)
  }

// One liner

const filter_list = l => l.filter(e => +e === e);

// Using typeof

const filter_list = l => l.filter(e => typeof e == 'number');

// Using Number.isInteger
// Doesn't require an arrow function

const filter_list = l => l.filter(Number.isInteger);
