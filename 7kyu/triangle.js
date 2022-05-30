// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//PREP

//Pass in 3 integers
//Return bool, whether or not the 3 parameters can be lengths of a triangle
//1, 1, 2 -> true

//Check if triangle if the sum of two sides is always greater than the third side

function isTriangle(a,b,c) {
    return a + b > c 
    && b + c > a 
    && c + a > b;
}

//One Liner

const isTriangle = (a, b, c) => a + b > c && b + c > a && c + a > b;

//Using Math.max

const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;