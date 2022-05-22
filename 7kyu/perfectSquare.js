// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//PREP 

// Take an integer, return true if perfect square, false if not
// 9 -> true, 10 -> false
// If negative, return false. Check if square root has no remainder. 

var isSquare = function(n){
    if (n < 0) return false
    return Math.sqrt(n) % 1 === 0 ? true : false
  }

// Still works without below 0 check, square root of negative number produces NaN anyway

const isSquare = n => Math.sqrt(n) % 1 === 0 ? true : false;

// Without turnary, just use the natural expression to return conditional

const isSquare = n => Math.sqrt(n) % 1 === 0;

// Check if square root is integer

const isSquare = n => Number.isInteger(Math.sqrt(n));