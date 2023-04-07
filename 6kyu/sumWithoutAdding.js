// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

// Notes
// The numbers (a,b) may be positive , negative values or zeros .

// Returning value will be an integer .

// Javascript: the Array reduce methods are disabled, along with eval, require, and module .
// Input >> Output Examples
// 1- Add (5,19) ==> return (24) 

// 2- Add (-27,18) ==> return (-9)

// 3- Add (-14,-16) ==> return (-30)

// Pass in two integers
// Return an integer: their sum without using +
// 1,3 -> 4

// Use bitwise operators and recursion to sum the numbers

function add(a, b) {
    if (b == 0) return a;
    else return add(a ^ b, (a & b) << 1)
}

// refactored using arrow function 

const add = (a, b) => b ? add(a ^ b, (a & b) << 1) : a;
