// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 12 is the product of all array's elements except the first element

// The second element 20 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2



// Pass in an array of integers
// Return a new array, where each element is the product of all elements except the current element
// [1, 2, 3] -> [6, 3, 2]

// Map the array. For each element, reduce the product of all elements of nonequal index. 

function productArray(numbers){
    return numbers.map((e, i, a) => a.reduce((acc, cur, j) => i == j ? acc : acc * cur, 1));
  }

// One line

const productArray = arr => arr.map((e, i) => arr.reduce((a, c, j) => i == j ? a : a * c, 1));

// Reduce the product of every element, but divide by current element

const productArray = arr => arr.map(e => arr.reduce((a, c) => a * c) / e);