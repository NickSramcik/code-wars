// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// Pass in 2 numbers, degrees of angles on a triangle
// Return a number, the third angle
// 30, 60 -> 90

// Return 180 - the 2 input angles

function otherAngle(a, b) {
    return 180 - (a + b);
}
