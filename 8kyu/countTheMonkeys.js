// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//Pass in a positive integer
//Return an array sequence of numbers from 1 to the input
//3 -> [1, 2, 3]

//Create an array of length n, map the array to the index + 1

function monkeyCount(n) {
    return Array(n).fill(0).map((_, i) => ++i);
    }

//One liner

const monkeyCount = n => Array(n).fill(0).map((_, i) => ++i);

//Array from

const monkeyCount = n => Array.from({length: n}, (_, i) => ++i);

//Declaring the variable inside a for loop
//This works with var, which is function scoped, but not let, which is block scoped

const monkeyCount = n => {
    for (var i = 0, arr = []; i < n; arr.push(++i));
    return arr;
}