// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Pass in a string or an array
// Return an array of unique elements from the input in order
// 'Shrek' -> ['S', 'h', 'r', 'e', 'k']

// Return an array made from a set of the input

var uniqueInOrder=function(iterable){
    let set = new Set(iterable);
    return Array.from(set)
  }
// Doesn't work cuz this challenge wants repeats as long as they aren't consecutive 



function uniqueInOrder(iterable){
    let arr = Array.from(iterable);
    return arr.filter((e, i) => e !== arr[i-1] || i == 0);
};

// You don't need to declare the array beforehand

const uniqueInOrder = it => [...it].filter((e, i) => e !== it[i-1] || i == 0);

// You can also use filter's array argument and check the next element instead of the previous

const uniqueInOrder = it => [...it].filter((e, i, a) => e !== a[i+1]);