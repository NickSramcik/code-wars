// Manhattan Distance
// Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

// Complete the function that accepts two points and returns the Manhattan Distance between the two points.

// The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

// Examples
// * Input [1, 1], [1, 1] => Output 0
// * Input [5, 4], [3, 2] => Output 4
// * Input [1, 1], [0, 3] => Output 3

// Pass in 2 arrays, each with 2 integers (x, y coordinates)
// Return a number, positive integer, distance in both x and y coordinates
// Examples above

// Store the absolute values of the difference of each coordinate
// Return the sum of these values

function manhattanDistance(pointA, pointB) {
    const xDistance = Math.abs(pointA[0] - pointB[0]),
          yDistance = Math.abs(pointA[1] - pointB[1]);
    
    return xDistance + yDistance;
}

// Refactored using arrow function syntax, and without storing data in memory

const manhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
