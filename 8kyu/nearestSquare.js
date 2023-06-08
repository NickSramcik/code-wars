// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Pass in positive integer
// Return integer, nearest square to input
// 69 -> 64

// Square root the input, round it, square it, and return

function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2;
}

// Refactored using arrow function and half power

const nearestSq = n => Math.round(n ** 0.5) ** 2;
