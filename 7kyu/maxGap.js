// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

// Note : Regardless the sign of negativity .

// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
// Explanation:
// The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

// Note : Regardless the sign of negativity .

// maxGap ({-54,37,0,64,640,0,-15}) //return (576)
// Explanation:
// The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

// Note : Regardless the sign of negativity .


// Pass in an array of integers
// Return the biggest difference between two consecutive elements (after sorting)
// [1, 2, 3, 4, 10] -> 6

// Sort the array, then reduce. 
// Evaluate if the difference between current and next value is bigger than accumulator. 
// If so, current becomes the new accumulator

function maxGap (numbers){
    return numbers.sort((a, b) => b - a).reduce((a, c, i) => {
        let diff = c - numbers[i + 1];
        return diff > a ? diff : a;
    }, 0);
  }

// Map the differences and return the max
// Need to check that index is > 0 so it's not trying to subtract the first element with the -1 element

const maxGap = arr => Math.max(...arr.sort((a, b) => a - b).map((e, i, a) => i > 0 ? Math.abs(e - a[i - 1]) : 0));