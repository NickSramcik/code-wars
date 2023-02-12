// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.


// Pass in a positive integer n > 2
// Return a number, the sum of angles of a polygon with n sides
// 3 -> 180

// Sum of angles = number of triangles in polygon * 180
// Number of triangles = number of sides - 2
// multiply (n - 2) * 180 and return

function angle(n) {
    return (n - 2) * 180;
}

// Refactored into arrow function

const angle = n => (n - 2) * 180;