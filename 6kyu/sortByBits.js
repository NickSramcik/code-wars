// In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

// E.g Given the array [7, 6, 15, 8]

// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0011)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].

// In cases where two numbers have the same number of bits, compare their real values instead.

// E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

// Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.

// Note: your solution has to sort the array in place.



// Pass in an array of integers
// Return that array sorted by number of 1s in each number's binary format (fewest to largest)
// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

// Create a function that gets the "on bit" count of a number
// Convert number to binary, then convert to an array of digits, filter the 1s, return the length
// Sort the input array by value, then by bit count and return it

const getBitsOld = n => [...n.toString(2)].filter(e => e == 1).length;

const sortByBitOld = arr => arr.sort((a, b) => a - b).sort((a, b) => getBits(a) - getBits(b));

// Refactored 

const getBits = n => n.toString(2).split(1).length;

const sortByBit = arr => arr.sort((a, b) => getBits(a) - getBits(b) || a - b);
