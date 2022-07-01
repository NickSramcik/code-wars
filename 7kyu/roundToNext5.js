// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


//Pass in an integer
//Return that integer to the next multiple of 5
// 21 -> 25, 02 -> 0

//Divide the inout by 5, round up, multiply by 5 & return

function roundToNext5(n){
    return Math.ceil(n / 5) * 5;
  }

//One liner

const roundToNext5 = n => Math.ceil(n / 5) * 5;

//Using a recursive function

function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  }return roundToNext5(n + 1);
}