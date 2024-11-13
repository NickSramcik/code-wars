// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

// Pass in a number and an array of functions
// Return a number

// Loop through the funcs array
//   Plug num into each function
// Return num

function chain(num, funcs) {
    for (let func of funcs) {
        num = func(num);
    }

    return num;
}

// Refactored with reduce

function chain(input, funcs) {
    return funcs.reduce((accumulator, currentFunc) => currentFunc(accumulator), input);
}
