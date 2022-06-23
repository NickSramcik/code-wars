// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Pass in an integer input (positive)
//Return an array, a list of all powers of 2 from 0 to n (inclusive)
//3 -> [1, 2, 4]

//Run a loop with input n as the upper bound. Each iteration, push a power of 2. Return array. 

function powersOfTwo(n){
    let arr = [];
    for (i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }return arr;
  }

//Using fill and map

const powersOfTwo = n => Array(n+1).fill(2).map((e, i) => e ** i);

//Using Array.from()
//First argument is the array like object (by passing in an object with length n+1, we get an array of that length)
//Second argument basically allows you to map the array, here we're just using the index, not the element
const powersOfTwo = n => Array.from({length: n + 1}, (_, i) => 2 ** i);

