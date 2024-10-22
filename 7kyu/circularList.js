// Create a Circular List

// A circular list is of finite size, but can infititely be asked for its previous and next elements. This is because it acts like it is joined at the ends and loops around.

// For example, imagine a CircularList of [1, 2, 3, 4]. Five invocations of next() in a row should return 1, 2, 3, 4 and then 1 again. At this point, five invocations of prev() in a row should return 4, 3, 2, 1 and then 4 again.

// Your CircularList is created by passing a vargargs parameter in, e.g. new CircularList(1, 2, 3). Your list constructor/init code should throw an Exception if nothing is passed in.

// Constructor
// Pass in an array
// Store array as this.list
// Store current index of that array as this.current

// next()
// Move index to next value (or first if we're at the end)
// return current list value

// prev()
// Move index to previous value (or last value if we're at the start)
// Return current list value


class CircularList {
    constructor(...args) {
        if (!args.length) throw new Error('Circular list must have at least one element')
        this.list = args;
        this.current = -1;
    }

    next() {
        this.current = (this.current + 1) % this.list.length;
        return this.list[this.current]
    }

    prev() {
        this.current = this.current - 1;
        if (this.current < 0) this.current = this.list.length - 1;
        return this.list[this.current];
    }
}

let shrek = new CircularList("one", "two", "three")

console.log(shrek.next())
console.log(shrek.next())
console.log(shrek.next())
console.log(shrek.next())
console.log(shrek.prev())
console.log(shrek.prev())
console.log(shrek.prev())
console.log(shrek.prev())
