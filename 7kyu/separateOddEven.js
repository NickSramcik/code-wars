// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .!alt
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// Input >> Output Examples:
// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// boy this one is weird

// Pass in an array of integers
// Return the array with evens first ascending, then odds descending

// Concat two filters sorted in opposite directions
// Filter out duplicate numbers
// Store them in values for readability

function menFromBoys(arr) {
    const evens = (arr.filter((n, i) => !(n % 2) && arr.indexOf(n) == i).sort((a, b) => a - b)),
          odds = (arr.filter((n, i) => n % 2 && arr.indexOf(n) == i).sort((a, b) => b - a));

    return evens.concat(odds);
}
