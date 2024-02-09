// Write a function that takes in wins, games played, and a target win percentage
// Return how many wins are needed to reach target win percentage

function winsToPercent(wins, played, target) {
    let percent = wins / played,
        winCount = 0;

    while (percent < target) {
        winCount++;
        wins++;
        played++;
        percent = wins / played;
    }

    return `${winCount} more wins needed to reach ${target * 100}% win rate`;
}

console.log(winsToPercent(242, 251, .97));
console.log(winsToPercent(242, 251, .98));
console.log(winsToPercent(242, 251, .99));
