// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

// Illustration
// Example where Charles (dashed line) runs a shorter lap than Bob:

// Example laps

// Task
// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)

// The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run

// Examples:

// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]

// Pass in 2 positive integers
// Return an array of 2 positive integers, how many steps each input needs to reach least common multiple
// 5, 3 -> [3, 5]

//// Find the least common multiple, then return an array of LCM / each input
// Create arrays of the multiples of each input, with each array's length equaling the other input
// Loop through one array until a value is found in the other array, store this as LCM
// Divide LCM by each input and return

var nbrOfLaps = function (x, y) {
    const arrX = Array.from({ length: y }, (_, i) => (i + 1) * x),
          arrY = Array.from({ length: x }, (_, i) => (i + 1) * y);
    let LCM = null;

    for (number of arrX) {
        if (arrY.includes(number)) {
            LCM = number;
            break;
        }
    }

    return [LCM / x, LCM / y];
};

// Refactored without storing arrays in memory

var nbrOfLaps = function (x, y) {
    let LCM = x;
    while (LCM % y != 0) LCM += x;
    return [LCM / x, LCM / y];
};

// Refactored using formulas and recursion
// LCM(a, b) = (a × b) ÷ HCF(a,b)

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
};

function nbrOfLaps(x, y) {
    const LCM = (x * y) / gcd(x, y);
    return [LCM / x, LCM / y];
};
