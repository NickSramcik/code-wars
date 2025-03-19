// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)

// Pass in an array (arr) and a number (insert)
// Return a number

// Loop through input array, find first index of num that is >= insert
// If result is -1, return arr.length, otherwise return it

function keepOrder(arr, insert) {
    const result = arr.findIndex(num => num >= insert);
    if (result === -1) return arr.length;
    return result; 
}

// Refactored to filter values < insert and returning resulting length

function keepOrder(arr, insert) {
    return arr.filter(num => num < insert).length;
}

// Refactored with for loop

function keepOrder(arr, insert) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= insert) return i;
    }

    return arr.length;
}
