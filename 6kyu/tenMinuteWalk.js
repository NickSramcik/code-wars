// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// Pass in an array of strings, each a single letter representing cardinal direction
// Return boolean, whether the directions will return to starting point in 10 minutes
// ['n','s','n','s','n','s','n','s','n','s'] -> true
// ['w'] -> false

// Return false if input length != 10 (each element represents 1 minute walk time)
// Count occurence of each direction using a hash map
// Return whether counts of n == s, AND counts of w == e (To ensure the walk ends @ start point)

function isValidWalk(walk) {
    if (walk.length != 10) return false;
    const walkMap = {};
    
    for (direction of walk) {
        walkMap[direction] = walkMap[direction] + 1 || 1;
    };

    return walkMap['n'] == walkMap['s'] && walkMap['w'] == walkMap['e'];
  }

// Store change in direction, increment with conditionals and check that change is canceled out

function isValidWalk(walk) {
    let dx = 0;
        dy = 0;
        minutes = walk.length;
    
    for (direction of walk) {
        if (direction === 'n') dy++;
        if (direction === 's') dy--;
        if (direction === 'e') dx++;
        if (direction === 'w') dx--;
    };

    return minutes === 10 && dx === 0 && dy === 0;
}

// Refactored into switch case

function isValidWalk(walk) {
    let dx = 0;
        dy = 0;
        minutes = walk.length;
    
    for (direction of walk) {
        switch (direction) {
            case 'n': dy++; break;
            case 's': dy--; break;
            case 'e': dx++; break;
            case 'w': dx--; break;
        };
    };

    return minutes === 10 && dx === 0 && dy === 0;
}