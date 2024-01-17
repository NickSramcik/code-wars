// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Pass in an array of numbers
// Return a number

// Store result var
// Loop through input array
    // If current element is not a num, return undefined
    // Cube the current num and add it to result if it is odd
// Return result

function cubeOdd(arr) {
    let result = 0;

    for (let num of arr) {
        if (typeof num != 'number') return undefined;
        
        const cube = num ** 3;
        if (cube % 2) result += cube;
    }

    return result;
}

let shrek = [1, 2, 3, 4];
console.log(shrek.map(num => num ** 3))
