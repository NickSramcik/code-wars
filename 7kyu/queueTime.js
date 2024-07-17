// You managed to send your friend to queue for tickets in your stead, but there is a catch: he will get there only if you tell him how much that is going to take. And everybody can only take one ticket at a time, then they go back in the last position of the queue if they need more (or go home if they are fine).

// Each ticket takes one minutes to emit, the queue is well disciplined, Brit-style, and so it moves smoothly, with no waste of time.

// You will be given an array/list/vector with all the people queuing and the initial position of your buddy, so for example, knowing that your friend is in the third position (that we will consider equal to the index, 2 (3 in COBOL): he is the guy that wants 3 tickets!) and the initial queue is [2, 5, 3, 4, 6].

// The first dude gets his ticket and the queue goes now like this [5, 3, 4, 6, 1], then [3, 4, 6, 1, 4] and so on. In the end, our buddy will be queuing for 12 minutes, true story!

// Build a function to compute it, resting assured that only positive integers are going to be there and you will be always given a valid index; but we also want to go to pretty popular events, so be ready for big queues with people getting plenty of tickets.

// Pass in a queue (array) and a number
// Return a number

// Let buddyTime be 0
// While queue[pos] > 0:
//  Loop through queue
//  if current num > 0 & buddy needs tickets, buddyTime += 1 & current num -= 1
// return buddyTime

function queue(queue, pos) {
    let buddyTime = 0;

    while (queue[pos] > 0) {
        for (i in queue) {
            if (queue[i] > 0 && queue[pos]) {
                buddyTime++;
                queue[i] -= 1;
            }
        }
    }

    return buddyTime;
}

// Refactored to stop the loop when possible

function queue(queue, pos) {
    let buddyTime = 0;

    while (queue[pos] > 0) {
        for (i in queue) {
            if (queue[i] > 0) {
                buddyTime++;
                queue[i] -= 1;
            }
            if (queue[pos] == 0) return buddyTime;
        }
    }
}
