// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Pass im a number
// Return the product of the input with 8 if even, 9 if odd
// 8 -> 8*8 = 64

// Use turnary. If odd, multiply by 9. Otherwise multiply by 8. 

const simpleMultiplication= n => n % 2 ? n * 9 : n * 8;

// Refactored to dryer code

const simpleMultiplication= n => n * (n % 2 ? 9 : 8);