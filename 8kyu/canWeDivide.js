// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

//Pass in 3 integers
//Return boolean, whether first input is divisible by the next two inputs
// (100, 50, 25) -> true

//Check if modulus for both a and b equal zero and return

function isDivideBy(number, a, b) {
    return number % a == 0 && number % b == 0;
  }

//One liner

const isDivideBy = (n, a, b) => n % a == 0 && n % b == 0;

//Combine the moduleses into one

const isDivideBy = (n, a, b) => n%a + n%b == 0;

//Check truthiness

const isDivideBy = (n, a, b) => !(n%a || n%b);