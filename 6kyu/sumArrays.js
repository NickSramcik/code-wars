// Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]
// If both arrays are empty, return an empty array.

// In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

// [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

// Pass in 2 arrays of numbers
// Return an array of numbers

// Convert each array into a string
// Sum the strings
// Convert string to array and return it

function addArrays(array1, array2) {
    let arrNum1 = parseInt(array1.join('')),
        arrNum2 = parseInt(array2.join(''));

    if (array1.length < 1) arrNum1 = 0;   
    if (array2.length < 1) arrNum2 = 0;   

    const sum = String(arrNum1 + arrNum2),
          result = [];
    
    if (sum == '0') return [];

    for (i = 0; i < sum.length; i++) {
        if (i == 0 && sum[i] == '-') {
            result.push(Number(sum[i + 1]) * -1);
            i++;
        }
        else result.push(Number(sum[i]));
    }

    return result;
}
