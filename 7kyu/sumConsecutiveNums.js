// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//PREP

//Pass in two integers
//Return an integer, sum of numbers between the two parameters (inclusive)
//(1, 3) -> 6    1 + 2 + 3 = 6

//Check if parameters are equal, if so, return one
//Create an ascending array between the two parameters
//Sum the array and return


function getSum(a, b) {
   if (a === b) return a;
   let arr = [];
   if (a < b) {
    for (i = a; i <= b; i++) {
        arr.push(i);
    }
   }else {
        for (i = a; i >= b; i--) {
        arr.push(i);         
        }
    }return arr.reduce((acc, cur) => acc + cur, 0);
}

//Using a formula instead of a loop

//The sum of consecutive numbers can be found by multiplying number of terms by the sum of first and last divided by 2
// sum = n(a + b) / 2
function getSum(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

//Using absolute value to make it one line

const getSum = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2;