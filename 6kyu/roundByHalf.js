// Round any given number to the closest 0.5 step

// I.E.

// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5
// Round up if number is as close to previous and next 0.5 steps.

// solution(4.75) == 5

// Pass in a number
// Return number, rounded to nearest 0.5

// Multiply the input by 10
// Round by 5:
//   Divide input by 5, round it, multiply by 5
// Divide input by 10, and return it

function solution(n) {
    n *= 10;
    // Round by 5
    n = ( Math.round(n / 5) ) * 5;
    return n / 10;
}

// Refactored for simplicity

function solution(n) {
    return  Math.round( n * 2 ) / 2;
}

console.log(solution(4.2), '->', 4);
console.log(solution(4.3), '->', 4.5);
console.log(solution(4.6), '->', 4.5);
console.log(solution(4.8), '->', 5);