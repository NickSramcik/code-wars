// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

// good luck :)

// Pass in a positive integer
// Return a string, depending on number of 1s in binary representation
// 2 -> "It's Odius!"

// Convert input to binary string
// Reduce the string to count 1s and store that value
// If 1s count is even, return evil, otherwise return odius

function evil(n) {
    const onesCount = n.toString(2).split('').reduce((a, c) => c == '1' ? ++a : a, 0);
    return onesCount % 2 ? "It's Evil!" : "It's Odious!";
}

// Refactored using arrow function and using split/length to count 1s

const evil = n => n.toString(2).split('1').length % 2 ? "It's Evil!" : "It's Odious!";
