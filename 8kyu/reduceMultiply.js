// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// Pass in an array of integers
// Return the product of all inputs
// [3, 4, 5] -> 60

// Reduce the array, multiplying accumulator with current value

function grow(x){
    return x.reduce((acc, cur) => acc * cur, 1); 
}

// One line

const grow = x => x.reduce((a, c) => a*c, 1);

// Converting to string multiplation expression, and evaluating it

const grow = x => eval(x.join('*'));