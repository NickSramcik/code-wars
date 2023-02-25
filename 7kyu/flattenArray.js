// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// Pass in an array
// Return one array of all inputs combined
// [1, 2, 3], ['a', 'b', 'c'] -> [1, 2, 3, 'a', 'b', 'c']

// Use rest syntax to concatenate all inputs and return em

var flatten = function (array){
    return [].concat(...array);
}

// Refatored into arrow function

const flatten = arr => [].concat(...arr);