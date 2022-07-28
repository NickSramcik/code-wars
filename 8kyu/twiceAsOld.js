// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// Pass in 2 positive integers
// Return integer, how many years ago first input is twice the second
// 11, 6 -> 1

// Descending loop checking for a being double b, if so, return i

function twiceAsOld(dad, son) {
    if (dad > 2 * son) {
        for (i = 0; i <= 100; i++) {
            if (dad === 2 * son) return i;
            ++dad;
            ++son;
        };
    }else for (i = 0; i <= dad; i++) {
        if (dad === 2 * son) return i;
        --dad;
        --son;
    };
  }

// Taking the difference

function twiceAsOld(dad, son) {
    return Math.abs(dad - 2 * son);
}

// One line

const twiceAsOld = (d, s) => Math.abs(d-2*s);