// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// Pass in a positive integer: a year
// Return a positive integer: how many friday the 13ths are in that year
// 2015 -> 3

// Store a count variable
// Loop through every month of that year
// For each month, create a date that is the 13th of that month
// If the day of the week is friday, increment count
// Return that count

// date.getDay() value of 5 represents Friday

function unluckyDays(year) {
    let count = 0;

    for (month = 0; month < 12; month++) {
        const thirteenth = new Date(year, month, 13);
        if (thirteenth.getDay() == 5) count++;
    }

    return count;
}

// Refactored using arrow function syntax and array filtering

const unluckyDays = year => Array(12).fill(0).filter((_, month) => new Date(year, month, 13).getDay() == 5).length;

// Just for fun, which year has the most?

function maxUnluckyDays(start, end) {
    let maxCount = 0,
        maxYear = null;

    for (year = start; year <= end; year++) {
        const unluckyCount = unluckyDays(year);

        if (unluckyCount > maxCount) {
            maxCount = unluckyCount;
            maxYear = year;
        }
    }

    return [maxYear, maxCount];
}
