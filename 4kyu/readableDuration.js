// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.



// Pass in a positive integer representing seconds
// Return those seconds divided into a readable time format
// 3662 -> '1 hour, 1 minute and 2 seconds'


// Each component needs to end in an s if plural
// Start by dividing by the largest components, move towards smaller components


// Create object, properties representing each component
// Separate function that divides by component's seconds, adds result to corresponding prop, subtract secs from input

// 31536000 seconds in a year
// 86400 seconds in a day
// 3600 seconds in an hour
// 60 seconsd in a minute

function formatDuration (seconds) {
    let result = [],
        keys = ['year', 'day', 'hour', 'minute', 'second'],
        time = {
        year: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    };

    if (seconds === 0) return 'now';
    if (seconds >= 31536000) {
        time.year = Math.floor(seconds / 31536000);
        seconds -= time.year * 31536000;
    }if (seconds >= 86400) {
        time.day = Math.floor(seconds / 86400);
        seconds -= time.day * 86400;
    }if (seconds >= 3600) {
        time.hour = Math.floor(seconds / 3600);
        seconds -= time.hour * 3600;
    }if (seconds >= 60) {
        time.minute = Math.floor(seconds / 60);
        seconds -= time.minute * 60;
    }if (seconds > 0) {
        time.second = seconds;
    }for (i = 0; i < 6; i++) {
        if (time[keys[i]]) {
            result.push(`${time[keys[i]]} ${keys[i]}${time[keys[i]] > 1 ? 's' : ''}`);
        };
    }for (i = 0; i < result.length - 1; i++) {
        if (i < result.length - 2) result[i] += ',';
        if (i == result.length - 2) result[i] += ' and';
    }return result.join(' ');
}
  
formatDuration(3662)