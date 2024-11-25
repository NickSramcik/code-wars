// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Pass in a number (n)
// Return a number

// If n is not divisible by 10, return -1
// Let result be 0
// Let bills be [500, 200, 100, 50, 20, 10]
// Loop through bills
//  if n is divisible by bill:
//       increment result by how many times bill fits in n
//       change n to the remainder
// Return result

function solve(n) {
    if (n % 10 !== 0) return -1;
    const Bills = [500, 200, 100, 50, 20, 10];
    let billCount = 0;

    for (let bill of Bills) {
        if (n >= bill) {
            billCount += Math.floor(n / bill);
            n = n % bill;
        }
    }

    return billCount;
}

// Refactored using while

function solve(n) {
    if (n % 10 !== 0) return -1;
    const Bills = [500, 200, 100, 50, 20, 10];
    let billCount = 0;

    for (let bill of Bills) {
        while (n >= bill) {
            n -= bill;
            billCount++;
        }
    }

    return billCount;
}

// console.log(`n: ${n}, bill: ${bill}, remainder: ${n % bill}, count: ${billCount}`)
