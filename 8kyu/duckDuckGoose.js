// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// Pass in an array of objects, and a positive integer
// Return a property of the chosen object
// examples above

// Use modulus to find the right index
// If index is 0 it should return the last element
// Otherwise return index - 1

function duckDuckGoose(players, goose) {
    const chosen = goose % players.length;
    if (chosen == 0) return players[players.length - 1].name;
    return players[chosen - 1].name;
}

// Refactored into arrow function

const duckDuckGoose = (players, goose) => players[--goose % players.length].name;
