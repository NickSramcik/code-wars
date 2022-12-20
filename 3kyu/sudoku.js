function sudoku(grid) {
    function isValid(row, col, num) {
      for (let i = 0; i < 9; i++) {
        // check row
        if (grid[row][i] === num) return false;
        // check column
        if (grid[i][col] === num) return false;
        // check 3x3 grid
        if (grid[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === num) return false;
      }
      return true;
    }
  
    function solve() {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          // skip filled cells
          if (grid[row][col] !== 0) continue;
  
          // try numbers 1 to 9
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              grid[row][col] = num;
              if (solve()) return true; // solve next cell
              grid[row][col] = 0; // backtrack
            }
          }
  
          // try next number failed, backtrack
          return false;
        }
      }
  
      // grid is solved
      return true;
    }
  
    solve();
    return grid;
  }