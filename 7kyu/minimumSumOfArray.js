// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74


// Pass in an even lengethed array of positive integers
// Return the minimum sum of element product pairs
// [1, 1, 1, 3] -> 4

// Sort the array from smallest to largest
// Reduce the array in a manner that pairs the largest values with the smallest

function minSum(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - i - 1]
    }return sum;
  }

// Using reduce method
// Uses ternary to only add to the accumulator for 1st half of the array (because we multiply downwards from 2nd half)

function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((a, c, i, r) => i < arr.length / 2 ? a + c * r[arr.length - i - 1] : a, 0);
}

// One line using slice

const minSum = x => x.sort((a, b) => a - b).slice(0, x.length / 2).reduce((a, c, i) => a + c * x[x.length - ++i], 0); 

// Reduce the whole array, then divide the whole sum by 2

const minSum = x => x.sort((a, b) => a - b).reduce((a, c, i) => a + c * x[x.length - ++i], 0) / 2;