// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// Pass in 3 positive integer inputs
// Return the sum of those inputs
// 1, 2, 3 -> 6

// Sum the inputs and return

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

// Refactored into arrow function with spread syntax and reduce

const goals = (...goals) => goals.reduce((a, c) => a + c, 0);