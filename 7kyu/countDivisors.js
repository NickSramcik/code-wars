// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// Pass in a positive integer
// Return how many numbers can divide into it
// 7 -> 2
// Loop through 1 to n and accumulate how many numbers return a falsey modulus

function getDivisorsCnt(n){
    return Array(n).fill(1).map((_, i) => i + 1).reduce((acc, cur) => !(n % cur) ? ++acc : acc, 0);
}
// ^This works but it's way too slow with huge numbers

// Using filter

function getDivisorsCnt(n){
    return [...Array(n+1).keys()].filter((_, i) => n % i === 0).length;
}

// One liner

const getDivisorsCnt = n => [...Array(n+1).keys()].filter((_, i) => n % i === 0).length;