// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
    arr2.forEach(e => arr1.push(e))
    return [...new Set(arr1.sort((a, b) => a - b))]
  }

// Expanded a bit

function mergeArrays(arr1, arr2) {
    // Loop through arr 2 and add each element to the end of arr 1
    arr2.forEach(e => arr1.push(e))
    // Sort this new combined array
    let merged = arr1.sort((a, b) => a - b)
    // Create a new set of this array, which automatically removes duplicates. 
    // Convert back to an array and return it
    return [...new Set(merged)]
  }

// One liner using concat

mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2).sort((a, b) => a - b))]