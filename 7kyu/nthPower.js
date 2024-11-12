// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

// Pass in an array of numbers arr, and a number n
// Return a number

// Let sum be a reduced sum of the numbers in arr
// Let powers be a reduced sum of the numbers in arr
// Return powers - sum

function modifiedSum(arr, n) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const powers = arr.reduce((acc, cur) => acc + cur ** n, 0);
    return powers - sum;
}

// Refactored to loop once instead of twice

function modifiedSum(arr, n) {
    return arr.reduce((acc, cur) => acc + cur ** n - cur, 0);
}

// Test Cases

console.log(modifiedSum([1, 2, 3], 3));
console.log(modifiedSum([1, 2], 5));
console.log(modifiedSum([1, 2, 3, 4, 5, 8], 2));
console.log(modifiedSum([1, 10, 3, 14, 5, 8], 3));
