// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15


// Pass in 2 positive integers. n, and d
// Return a number, n + 2d

// 3, 6 -> 3 + 6 * 2 = 15

// Multiply d * 2 and add it to n, return

function move (position, roll) {
    return position + roll * 2;
  }

// Refactored into arrow function

const move = (p, r) => p + r * 2;