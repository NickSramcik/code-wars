// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Pass in an array of numbers and string numbers
// Return a number

// Let numSum be all numbers filtered from input array and reduced
// Let stringSum be all string numbers filtered from input array and reduced
// Return numSum - stringSum

function divCon(arr) {
    const numSum = arr.filter(x => typeof x == 'number').reduce((acc, cur) => acc + cur, 0);
    const stringSum = arr.filter(x => typeof x == 'string').reduce((acc, cur) => acc + Number(cur), 0);

    return numSum - stringSum;
}

// Refactored for slightly better time complexity

function divCon(arr) {
    let result = 0;

    for (x of arr) {
        if (typeof x == 'number') result += x;
        else result -= Number(x);
    };

    return result;
}
