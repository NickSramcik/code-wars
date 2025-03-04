// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

// Pass in a number (n)
// Return a number

// Convert n to binary using recursion
// Convert binary string to array of digits
// Filter array for digits that equal 1
// Return the length of this array

function toBinary(n) {
    if (n == 0) return '0';
    return toBinary(Math.floor(n / 2)) + n % 2;
}

function hammingWeight(n) {
    return toBinary(n).split('').filter(digit => digit == 1).length;
}

// Using bitwise operators

function hammingWeight(n) {
    if (n == 0) return n;
    return n % 2 + hammingWeight(n >> 1);
}

// Test Cases

console.log(hammingWeight(10))
