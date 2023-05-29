// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

// Pass in 3 integers (a, b, c)
// Return an array of integers, a sequence from a to b in steps of c
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]

// Brute force
// Store an empty result array
// Loop from a to b in steps of c
// Push curent index to result array
// Return result

function generateRange(min, max, step) {
    const result = [];

    for (i = min; i <= max; i += step) {
        result.push(i);
    }

    return result;
}

// Refactored with arrow function and array.from

const generateRange = (min, max, step) => Array.from({length: (max - min) / step + 1}, (_, i) => min + step * i);
