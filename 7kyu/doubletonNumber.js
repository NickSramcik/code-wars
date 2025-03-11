// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

// Examples:
// doubleton(120) === 121
// doubleton(1234) === 1311
// doubleton(10) === 12

// Pass in a number 
// Return a number

// Helper function: is doubleton
// Convert number to array of digits
// Use a map to count how often each digit occurs
// If map contains 2 keys, return true

// If current num + 1 is doubleton, return num + 1
// Otherwise, increment it and repeat

function isDoubleton(num) {
    const digits = num.toString().split('');
    const map = new Map;

    for (const digit of digits) {
        map.set(digit, map.get(digit) + 1 || 1);
    }

    return [...map.keys()].length == 2;
}

function doubleton(num) {
    if (isDoubleton(num + 1)) return num + 1;
    return doubleton(num + 1);
}

// Refactored with sets

const isDoubleton = n => new Set(n.toString()).size == 2;
const doubleton = n => isDoubleton(n + 1) ? n + 1 : doubleton(n + 1);
