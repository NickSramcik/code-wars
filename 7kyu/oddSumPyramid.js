// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Pass in a positive integer n
// Return the sum of the nth row of odd numbers, in pyramid shown above
// 3 -> 13 + 15 + 17 + 19 = 64

// Determine the first and last term of the nth row
// Loop between those terms, with increments of 2
// In each iteration, add current index to a counter
// Return the counter

// First term of nth row is equal to n^2 - (n - 1)
// Last term of nth row is equal to ((n + 1)^2 - n) - 2

function rowSumOddNumbers(n) {
    let sum = 0;
    const first = n ** 2 - (n - 1),
        last = (n + 1) ** 2 - n - 2;

    for (i = first; i <= last; i += 2) {
        sum += i;
    }

    return sum;
}

// You can also solve this by cubing n

const rowSumOddNumbers = n => n ** 3;
