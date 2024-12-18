// Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

// The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

// Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

// Watch out for leap years!

// Pass in a date object
// Return a number

// Helper function to get day of the year
//   Pass in a date, return a number
//   let myDate be a new date using input string
//   let year get a full year
//   let firstJan be a new date of jan 1st, same year
//   let diff be myDate - firstJan
//   return diff / (1000 * 60 * 60 * 24) + 1

function dayOfYear(date) {
    const year = date.getFullYear();
    const firstJan = new Date(year, 0, 1);
    const diff = date - firstJan;
    return Math.round(diff / (1000 * 60 * 60 * 24) + 1);
}

function daysUntilChristmas(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const myDay = dayOfYear(new Date(year, month, day));
    let xmas = dayOfYear(new Date(year, 11, 25));

    if (xmas >= myDay) return xmas - myDay;

    xmas = dayOfYear(new Date(year + 1, 11, 25));
    const lastDay = dayOfYear(new Date(year, 11, 31));
    return lastDay - myDay + xmas;
}

// Refactored

function daysUntilChristmas(date) {
    const isPassed = date.getMonth() == 11 && date.getDate() > 25;
    const year = isPassed ? date.getFullYear() + 1 : date.getFullYear();
    const xmas = new Date(year, 11, 25);
    return (xmas - date) / (1000 * 60 * 60 * 24);
}
