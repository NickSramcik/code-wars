// Circle area inside square
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.

// inscribed circle

// You get the blue+red area and need to calculate the red area.

// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

// You don't have to worry about error handling or negative number input: area >= 0.


// Square area = length * width
// Circle area = width/2 ^ 2 * pi


function squareAreaToCircle(size){
  return ( Math.sqrt(size) / 2 )** 2 * Math.PI
}

//One liner

squareAreaToCircle = size => (Math.sqrt(size) / 2)** 2 * Math.PI


//You can also just multiply the area by pi and divide it by 4, basically simplifying and canceling out what was written above

squareAreaToCircle = size => size * Math.PI / 4