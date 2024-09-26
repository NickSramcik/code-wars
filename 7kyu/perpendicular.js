// You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular lines you can make using these lines.

// Note: A perpendicular line is one that forms a 90 degree angle

// n will always be greater than or equal to 0
// Examples with 3 and 4 lines

// Pass in an integer
// Return an integer

// Let horizontal and vertical be 0
// While n is positive:
//   increment horizontal or vertical, whichever is smaller
//   decrement n
// Multiply horizontal by vertical and return result

function maxBisectors(n) {
    let horizontal = 0;
    let vertical = 0;

    while (n > 0) {
        if (horizontal > vertical) vertical++;
        else horizontal++;

        n--;
    }

    return horizontal * vertical;
}

// O(1) solution using formula

function maxBisectors(n) {
    return Math.floor(n ** 2 / 4);
}
