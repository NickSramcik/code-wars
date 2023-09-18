// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

// Pass in a number, distance in m 
// Return a positive integer, how many folds needed to reach input distance
// 384000000 -> 42

// store a count of folds, and a thickness set to 0.0001
// While thickness < distance, double the thickness and increment folds count
// Return folds count

function foldTo(distance) {
    let thickness = 0.0001,
        folds = 0;

    while (thickness < distance) {
        folds++;
        thickness *= 2;
    }

    return distance >= 0 ? folds : null;
}

// Refactored w/ algorithm for constant efficiency
// distance = thickness * 2 ^ folds
// folds = log2( distance / thickness )
// ^ round up

function foldTo(distance, thickness = 0.0001) {
    if (distance < 0) return null;
    if (distance < thickness) return 0;
    return Math.ceil(Math.log2(distance / thickness));
}
