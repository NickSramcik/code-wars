// Our counter prototype is broken. Can you spot, what's wrong here?

// function Counter() {
//     this.value = 0;
//   }
  
//   Counter.prototype.increase() {
//     this.value++;
//   };
  
//   Counter.prototype.getValue() {
//     return this.value;
//   };
  
//   Counter.prototype.reset() {
//     this.value = 0;
//   };

class Counter {
    constructor() {
        this.value = 0;
    }

    increase() {
        this.value++;
    }

    getValue() {
        return this.value;
    }

    reset() {
        this.value = 0;
    }
}
