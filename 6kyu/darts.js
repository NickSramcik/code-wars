// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140

// Pass in an array of positive numbers
// Return a positive integer
// Examples above

// Return 0 if input empty
// Return 100 if every value is < 5
// Store an empty score value
// Loop through the array
//  if num > 10, add 0 to score
//  if num >= 5 and <= 10, add 5 to score
//  if num < 5, add 10 to score
// Return score

function scoreThrows(radii) {
    let score = 0;

    for (radius of radii) {
        if (radius < 5) score += 10;
        if (radius >= 5 && radius <= 10) score += 5;
    }

    if (radii.length > 0 && radii.every(num => num < 5)) score += 100;

    return score;
}
