// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//PREP

//Pass in an integer
//Return an integer that is the next perfect square if arg is a square, otherwise return -1
//4 -> 9

//Loop through each incrementing number until one is a perfect square and return it

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0)
        return -1;
    else sq++;
    while (Math.sqrt(sq) % 1 !== 0) {
        sq++;
    }return sq;
  }

//Can be condensed by checking for modulus of the square root being truthy, and by just incrementing the square instead of looping

const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);