// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// Pass in an array and two numbers
// Return boolean

// Loop through the input array
// If current value is a or b, and the next value is a or b, return true
// Return false at the end of the loop, no consecutives found

function consecutive(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == a && arr[i + 1] == b) return true;
        if (arr[i] == b && arr[i + 1] == a) return true;
    }

    return false;
}

// Refactored using indexOf
// if a & b are consecutive, the difference between their indeces will be 1 or -1

function consecutive(arr, a, b) {
    const idxA = arr.indexOf(a);
    const idxB = arr.indexOf(b);

    return Math.abs(idxA - idxB) == 1;
}
