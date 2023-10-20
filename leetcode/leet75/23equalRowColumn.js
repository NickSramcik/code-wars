// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:

// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 200
// 1 <= grid[i][j] <= 105

// Declare a map to store rows
// Declare a pair counter
// Loop through each subarray in input array to capture rows
    // Join each subarray to string and add it to row map
// Loop through the ith element of each subarray to capture columns
    // Store an empty result string
    // Add the value of the ith element of each subarray to result string
    // If result string is in row map, increment pair counter
// Return pair counter

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = new Map();
    let pairs = 0;

    for (subArray of grid) {
        const row = subArray.join(',');
        
        if (rowMap.has(row)) {
            rowMap.set(row, rowMap.get(row) + 1);
        }
        else rowMap.set(row, 1);
    }
    
    for (i = 0; i < grid.length; i++) {
        let column = [];
        
        for (row of grid) {
            column.push(row[i]);
        }
        
        column = column.join(',');
        if (rowMap.has(column)) {
            pairs += rowMap.get(column);
        }
    }

    return pairs;
};

// Test Cases 

console.log(equalPairs([[3,2,1], [1,7,6], [2,7,7]]), '->', 1)
console.log(equalPairs([[3,1,2,2], [1,4,4,5], [2,4,2,2], [2,4,2,2]]), '->', 3)
console.log(equalPairs([[11,1], [1,11]]), '->', 2)
