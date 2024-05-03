// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

// No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

// class Cube
// args: length
// methods:
//      surfaceArea getter -> return length^2 * 6
//      surfaceArea setter -> set length to sqrt(surfaceArea / 6)
//      volume getter -> return length^3
//      volume setter -> set length to cbrt(volume)

class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        return this.length ** 2 * 6;
    }

    set surfaceArea(val) {
        this.length = Math.sqrt(val / 6);
    }

    get volume() {
        return this.length ** 3;
    }

    set volume(val) {
       this.length = Math.cbrt(val);
    }
}
