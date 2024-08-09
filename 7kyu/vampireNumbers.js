// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

// Pass in 2 numbers
// Return boolean

// let inputs be input nums concated into a string number
// let product be a string of the product b/w inputs
// Loop through each string and store number frequency of each in their own object map
// Loop through a map and return false if anything is unequal
// Return true after end of loop

function vampireTest(a, b) {
    const input = String(a) + String(b);
    const product = String(a * b);
    const inputMap = {};
    const productMap = {};

    for (digit of input) {
        inputMap[digit] = inputMap[digit] + 1 || 1;
    } 

    for (digit of product) {
        productMap[digit] = productMap[digit] + 1 || 1;
    }

    for (digit in inputMap) {
        if (inputMap[digit] !== productMap[digit]) return false;
    }

    return true;
}
