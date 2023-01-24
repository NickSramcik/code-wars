// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// Pass in 2 positive integers
// Return bool, whether one input is even and the other is odd
// 1, 4 -> true     2, 4 -> false
// Return whether n1 is even & n2 is odd, or n1 is odd & n2 is even

function lovefunc(flower1, flower2){
    return flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0;
  }

// Refactored into arrow function

const lovefunc = (f1, f2) => f1 % 2 == 0 && f2 % 2 != 0 || f1 % 2 != 0 && f2 % 2 == 0; 