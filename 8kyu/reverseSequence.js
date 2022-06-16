// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Pass in a positive whole number n
//Return an array, a reverse sequence starting from n down to 1
// reverseSeq(6) -> [6, 5, 4, 3, 2, 1]


//Create an array of length n. Run a function on the array so that each element is squential, starting with 1.
//Reverse that sequential array and return it

const reverseSeq = n => {
    return Array.from({length: n}, (_, i) => i + 1).reverse();
  };

//One liner

const reverseSeq = n => Array.from({length: n}, (_, i) => i + 1).reverse();

//An even simpler/shorter way of doing this, by decreasing length each iteration of the function
//You don't need to reverse it this way

const reverseSeq = n => Array.from({length: n}, () => length--);

//Creating a blank array and mapping it
//Create an array of length n
//This basically does the same thing it just runs the function through a map instead of with a method of the Array itself
//Seems you can't map an empty array

const reverseSeq = n => Array(n).fill(0).map((e, i) => n - i);