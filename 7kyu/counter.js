// You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

// Methods
// check -> return current count
// increment -> count += 1

function Counter() {
    let count = 0;

    this.check = function() {
        return count;
    }
    this.increment = function() {
        count += 1;
    }
};
