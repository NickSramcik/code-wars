// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.
// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out. 

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.
// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!

var Queue = function() {
  this.array = [];
};

Queue.prototype.enqueue = function(item) {
  this.array.push(item);
};

Queue.prototype.dequeue = function() {
  return this.array.shift();
};

Queue.prototype.size = function() {
    return this.array.length;
};

// Using classes

class Queue {
    constructor() {
        this.q = [];
    };
    enqueue(item) {
        this.q.push(item);
    };
    dequeue() {
        return this.q.shift();
    };
    size() {
        return this.q.length;
    };
}


// Using objects instead of arrays

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  };
  
  enqueue(item) {
    this.storage[this.tail] = item;
    this.tail++;
  };
  dequeue() {
    const removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  };
  size() {
    const length = this.tail - this.head;
    if (length < 0) return 0;
    return length;
  };
}