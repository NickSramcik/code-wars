// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// Pass in a positive integer
// Return a string
// 1 -> 'Sunday'

// Use an array to store dates, return the index of that array or a default error string

function whatday(num) { 
    const dates = [null, 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dates[num] || 'Wrong, please enter a number between 1 and 7'
}
