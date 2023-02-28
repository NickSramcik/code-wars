// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghost {
    constructor() {
        const seed = Math.floor(Math.random() * 4);
        switch(seed) {
            case 0: this.color = 'white'; break;
            case 1: this.color = 'yellow'; break;
            case 2: this.color = 'purple'; break;
            case 3: this.color = 'red'; break;
        };
    };
};

// Using an array to store the values

class Ghost {
    constructor() {
        const colors = ['white', 'yellow', 'purple', 'red'],
              seed = Math.floor(Math.random() * 4);
        this.color = colors[seed];
    };
};

// Combined together

class Ghost {
    constructor() {
        this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
    };
};