// Perimeter sequence
// The first three stages of a sequence are shown.

// blocks

// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

// Pass in an integer >= 1, n
// Return an integer, the perimeter of the nth shape in the sequence

// The sequence of shapes' perimeters are increasing in steps of 4
// Multiply the inputs by 4 and return it

function perimeterSequence(a, n) {
    return a * n * 4;
}

// Arrow function

const perimeterSequence = (a, n) => a * n * 4;
