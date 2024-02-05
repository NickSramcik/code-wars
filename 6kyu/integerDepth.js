// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

// example:

// let see n=42

// Multiple         value         digits     comment
// 42*1              42            2,4
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed
// 42*9              378            7         3,8 existed
// Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

// Pass in a positive integer, n
// Return a number

// Store current step value, initial value 1
// Store object to memoize digits
// While digit size < 10:
//      Multiply n by step, store this value
//      Iterate through each digit
//          If current digit is not in digits, add it
//      Increment step
// Return step

function computeDepth(n) {
    let step = 1;
    const digits = {};

    while (Object.keys(digits).length < 10) {
        const current = String(n * step);

        for (digit of current) {
            if (!digits[digit]) digits[digit] = true;
        }

        step++;
    }

    return step - 1;
}

// Refactored using a stored digits array that's filtered for digits NOT present until it is empty
// Likely worse time efficiency than previous solution because we must loop through digits array multiple times

function computeDepth(n) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        depth = 0;

    while (digits.length) {
        const multiple = String(n * ++depth);
        digits = digits.filter(num => multiple.indexOf(num) == -1);
    }

    return depth;
}
