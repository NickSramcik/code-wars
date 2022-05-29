// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//PREP

//Pass in two arrays
//Return the first array without elements present in 2nd array
//[1, 2, 3, 4] [2, 3] -> [1, 4]

//For each element in array b, filter the first array to elements not equal to b's element

function arrayDiff(a, b) {
  b.forEach(bElement => a = a.filter(aElement => aElement !== bElement));
  return a;
}

//Using filter and includes

const arrayDiff = (a, b) => a.filter(e => !b.includes(e));

//Using Set and has
//Sets use .has instead of .includes, it's basically the same thing, but with sets

function arrayDiff(a, b) {
    b = new Set(b);
    return a.filter(e => !b.has(e));
}