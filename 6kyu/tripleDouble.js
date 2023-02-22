// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

// Pass in 2 numbers
// Return a number, 0 or 1, representing whether 1st input has a triple and 2nd has a double of same num
// 124442, 141551 -> 1
// 124452, 141451 -> 0

// Loop through first number, checking previous 2 values. If triple is found, store it. 
// Loop through second number and check if current and prev value equal any triples
// Return 1 if a double is found, 0 otherwise. 

function tripledouble(num1, num2) {
    const tripleMap = {},
          digits1 = num1.toString().split(''),
          digits2 = num2.toString().split('');
    
    for (i = 2; i < digits1.length; i++) {
        if (digits1[i] == digits1[i - 1] && digits1[i] == digits1[i - 2]) {
            tripleMap[digits1[i]] = true;
        };
    };

    for (num in tripleMap) {
        for (i = 1; i < digits2.length; i++) {
            if (digits2[i] == num && digits2[i - 1] == num) {
                return 1;
            };
        };
    }return 0;
};

// Using .some() method
// + is added in front of return to convert boolean true/false to number 0/1

function tripledouble(num1, num2) {
    const nums = [...Array(10).keys()],
          n1 = String(num1),
          n2 = String(num2);
    
    return +nums.some(digit => 
        n1.includes(String(digit).repeat(3)) &&
        n2.includes(String(digit).repeat(2))
    );
}