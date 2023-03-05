// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// Pass in a positive number A, which represents a 1/4 circumference of a circle 
// Return a number rounded to 2 decimals, representing area of a square who's width equals circle's radius
// 2 -> 1.62

// square width = radius
// area = radius * radius
// radius = (input * 4) / 2π 

// area = ( (input * 4) / 2π ) ^ 2

function squareArea(A){
  return ( (A * 4) / (2 * Math.PI) ) ** 2;
}

// Refactored into arrow function

const squareArea = arc => ( (arc * 4) / (2 * Math.PI) ) ** 2;