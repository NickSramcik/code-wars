// You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects.

// Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.

// Your task
// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

// Example
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

// class Quark
// args: color, flavor (both strings)
// properties: baryon_number = 1/3
// methods: interact(otherQuark) -> swap color values between quarks

class Quark {
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1/3;
    }

    interact(otherQuark) {
        [this.color, otherQuark.color] = [otherQuark.color, this.color];
    }
}

// Refactored to validate colors/flavors
class Quark {
    constructor(color, flavor) {
        const validColors = ['red', 'blue', 'green'],
              validFlavors = ['up', 'down', 'strange', 'charm', 'top', 'bottom'];

        this.color = validColors.includes(color) ? color : null;
        this.flavor = validFlavors.includes(flavor) ? flavor : null;
        this.baryon_number = 1/3;
    }

    interact(otherQuark) {
        [this.color, otherQuark.color] = [otherQuark.color, this.color];
    }
}
