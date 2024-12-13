// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// Pass in an array of strings
// Return boolean

// 24hr * 60m * 60s = 86400 seconds
// Let timeLeft be 86400
// Loop through gifts array
//   Split the current gift w/ : separator to get an array of hours, minutes, and seconds
//   Destrcture gift to get hours, minutes, seconds
//   Decrement timeleft by hours * 60 * 60, minutes * 60, and seconds
//   If timeLeft < 0, return false
// Return true, we have time left so Santa saved Christmas! 🎅💥🎉

function determineTime(gifts) {
    let timeLeft = 24 * 60 * 60;

    for (gift of gifts) {
        const [hours, minutes, seconds] = gift.split(':').map(time => Number(time));
        const timeSpent = (hours * 60 * 60) + (minutes * 60) + seconds;
        timeLeft -= timeSpent;
    }

    return timeLeft >= 0;
}
