// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


// Pass in 3 positive integers, start, end, step
// Return sum of sequence from start to end, in increments of step. 0 if start > end
// 1, 10, 3 -> 1 + 4 + 7 + 10 = 22

// Check for start > end, return 0
// Run a loop from start to end, in increments of step, sum and return


const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    let sum = 0;
    for (i = begin; i <= end; i += step) {
        sum += i;
        console.log(i, sum)
    }return sum;
  };

// Using a recursive function

const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    return begin + sequenceSum(begin + step, end, step);
  };

// Same thing but one line

const sequenceSum = (b, e, s) => b > e ? 0 : b + sequenceSum(b + s, e, s);