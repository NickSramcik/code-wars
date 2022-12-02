// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// Pass in two boolean values, employed and vacation
// Return whether employed is true AND vacation is false
// (true, false) -> true

// Check if employes is true AND vacation is false

function setAlarm(employed, vacation) {
    return (employed === true && vacation === false);
}

// Refactored into arrow function

const setAlarm = (employed, vacation) => employed && !vacation;