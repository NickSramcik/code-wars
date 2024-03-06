// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range −50⩽�,�⩽50−50⩽x,y⩽50.

// Tests compare expected result and actual answer with tolerance of 1e-6.

// Pass in 2 objects: points with x & y coordinates
// Return a number: distance b/w them

// Store the difference between x's and y's
// Use those diffs as sides of a triangle, use pythagorean theorum to get C value (result)
// Return result

// a^2 + b^2 = c^2

function distanceBetweenPoints(a, b) {
    const xDiff = Math.abs(a.x - b.x),
          yDiff = Math.abs(a.y - b.y),
          result = Math.sqrt(xDiff ** 2 + yDiff ** 2);

    return result;
}

// Using Math.hypot

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}
