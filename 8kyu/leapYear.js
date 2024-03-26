// A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example:

// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

// Pass in a number
// Return a string

// return 366 if input is divisible by 4 AND isn't divisible by 100 OR is divisible by 400
// return 365

function yearDays(year) {
    if (!(year % 4) && (year % 100) || !(year % 400)) {
        return `${year} has 366 days`;
    }
    return `${year} has 365 days`;
}
