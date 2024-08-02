// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// Pass in 3 numbers
// Return a string

// Let result be an empty array
// While n > 0:
//   push a to result
//   add d to a
//   decrement n
// Return result joined into a string, w/ separator: ', '

function arithmeticSequenceElements(a, d, n) {
	const result = [];

    while (n > 0) {
        result.push(a);
        a += d;
        n--;
    }

    return result.join(', ');
}

// Refactored

function arithmeticSequenceElements(a, d, n) {
    const result = [a];
    while (--n) result.push(a += d);
    return result.join(', ');
}

// Let result be an empty array
// loop from a to d * n, in steps of d
//    push i to result
// Join result into a string separator: ', '
// Return result

// function arithmeticSequenceElements(a, d, n) {
// 	const result = [];

//     for (i = a; i <= d * n; i += d) {
//         result.push(i);
//     }

//     return result.join(', ');
// }

// ^ Breaks with edge cases

