// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.



// Pass in two arrays of numbers of equal length
// Return boolean, whether the second array contains the squares of the first array (regardless of order)
// [1, 2, 3, 4, 5], [1, 4, 9, 16, 25] -> true

// Sort both arrays, then return whether every element of the 2nd array is the square of each element of the 1st
// First check if either array is null for edge case

function comp(arr1, arr2){
    if (!arr1 || !arr2) return false;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    return arr1.every((e, i) => e * e == arr2[i]);
  }

// Check that the second array includes every square of the first array

const comp = (a1, a2) => a1.every(e => a2.includes(e * e));
// This kinda works but gets tripped up on some edge cases

// Sort both arrays, square the first array, and check if both arrays are equal
// Add a check that both arrays are truthy (not null)
// Sort method doesn't need arguments if you're doing a basic small to large sort

const comp = (a1, a2) => !!a1 && !!a2 && a1.map(e => e * e).sort().join('') == a2.sort().join('');