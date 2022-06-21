// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


//Pass in an integer between 1 & 12
//Return an integer, the quarter that the month falls in (1 - 4)
// 2 -> 1, 10 -> 4

//Use if statements to check inputs between their respective quarters

function quarterOf(month) {
    if (month < 4) return 1;
    if (month < 7) return 2;
    if (month < 10) return 3;
    return 4;
}

//Using math.ceiling

const quarterOf = month => Math.ceil(month / 3);