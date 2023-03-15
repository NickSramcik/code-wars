// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


// Pass in an array of strings
// Return a string, conditional on where the wolf is
// ["sheep", "sheep", "wolf"] -> "Pls go away and stop eating my sheep"

// Reverse the array and loop through it
// If first element is wolf, return 'pls go away...'
// When a wolf is found, warn sheep of previous index

function warnTheSheep(queue) {
    queue.reverse();
    for (i = 0; i < queue.length; i++) {
        if (i == 0 && queue[i] == 'wolf') return 'Pls go away and stop eating my sheep';
        if (queue[i] == 'wolf') return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    };
}

// Find the index of the wolf using indexOF

function warnTheSheep(queue) {
    const wolfPosition = queue.reverse().indexOf('wolf');
    return wolfPosition == 0 ? 'Pls go away and stop eating my sheep' : 
                               `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}