// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// Pass in two arrays, each with 3 positive integers
// Return the difference between the products of each array
// [2, 2, 3], [5, 4, 1] -> 8

// Return the difference of the product of each array

function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

// Refactored into arrow function

const findDifference = (a, b) => Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// Refactored again for fun

const product = x => [...x].reduce((a, c) => a * c, 1);
const findDifference = (a, b) => Math.abs(product(a) - product(b));