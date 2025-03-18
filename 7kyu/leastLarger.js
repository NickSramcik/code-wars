// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

// Pass in an array (arr) and a number (i)
// Return a number

// Let min be Infinity
// Let result be -1;
// Let target be arr[i]
// Loop through input array
//      If current num is greater than target, and less than result:
//          Set min to current num
//          Set i to current index
// Return result

function leastLarger(arr, i) {
    let min = Infinity;
    let result = -1;
    let target = arr[i];

    for (let j in arr) {
        const current = arr[j];

        if (current > target && current < min) {
            min = current;
            result = Number(j);
        }
    }

    return result;
}

// Refactored to first filter for nums greater than target

function leastLarger(arr, i) {
    const min = Math.min(...arr.filter(num => num > arr[i]));
    return arr.indexOf(min);
}
