// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// Pass in a string
// Return a string

// Let hours, minutes, and seconds equal each section of input string
// If input is invalid, return null
// If seconds >= 60, divide seconds by 60 and add result to minutes. Set seconds to the remainder
// If minutes >= 60, divide seconds by 60 and add result to hours. Set minutes to the remainder
// If hours >= 24, divide hours by 24 and set hours to the remainder
// Return hours:minutes:seconds

function timeCorrect(timestring) {
    if (timestring == '') return '';
    if (!timestring) return null;

    let [hours, minutes, seconds] = [...timestring.split(':').map(Number)];
    
    if (!hours || !minutes || !seconds) return null;
    if (Number.isNaN(+hours) || Number.isNaN(+minutes) || Number.isNaN(+seconds)) return null;

    if (seconds >= 60) {
        const remainder = seconds % 60;
        minutes += Math.floor(seconds / 60);
        seconds = remainder;
    }

    if (minutes >= 60) {
        const remainder = minutes % 60;
        hours += Math.floor(minutes / 60);
        minutes = remainder;
    }

    if (hours >= 24) {
        const remainder = hours % 24;
        hours = remainder;
    }

    let fixed = [hours, minutes, seconds].map(time => String(time).padStart(2, '0'));

    return fixed.join(':');
}
