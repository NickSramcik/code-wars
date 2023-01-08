// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)


// Pass in a pair of strings, colors of the gloves
// Return a number, how many pairs of matching gloves can be made
// ['red', 'red', 'green', 'blue', 'blue', 'red'] -> 2

// Create a hash map to count how many of each color are in the array
// Loop through map and sum the counts divided by two (decimals floored) 
// Return sum

function numberOfPairs(gloves) {
  const gloveMap = {};
  let pairCount = 0;

  for (glove of gloves) {
    gloveMap[glove] = gloveMap[glove] + 1 || 1;
  };

  for (color in gloveMap) {
    pairCount += Math.floor(gloveMap[color] / 2);
  };

  return pairCount;
}