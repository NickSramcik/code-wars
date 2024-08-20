// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

// Pass in 2 numbers
// Return an array

// If times < 1, return empty array
// Otherwise, return [number] concat with recursion, decrement times by 1

function replicate(times, number) {
    if (times < 1) return [];
    return [number].concat(replicate(times - 1, number));
}

// Refactored w/ turnary

function replicate(times, number) {
    return times < 1 ? [] : [number].concat(replicate(times - 1, number));
}
