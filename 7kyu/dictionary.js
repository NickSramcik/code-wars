// Create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

// Class Dictionary
// Data:
//      entries (array of objects each w/ name and description string properties)
// Functions:
//      newEntry() -- Take in name and description and add to entries
//      look() -- take in a name, return matching description (or error if not found)

class Dictionary {
    constructor() {
        this.entries = [];
    }

    newEntry(name, description) {
        this.entries.push({
            name: name,
            description: description,
        });
    }

    look(name) {
        const result = this.entries.find(entry => entry.name === name);
        return result ? result.description : `Can't find entry for ${name}`;
    }
}

// Refactored using maps

class Dictionary {
    constructor() {
        this.entries = new Map();
    }

    newEntry(name, description) {
        this.entries.set(name, description);
        return this;
    }

    look(name) {
        return this.entries.get(name) ?? `Can't find entry for ${name}`;
    }
}

// Refactored using sets
// Useful if we want to do something like this with more complexity, like adding more properties to each entry later

class Dictionary {
    constructor() {
        this.entries = new Set();
    }

    newEntry(name, description) {
        this.entries.add({ name: name, description: description });
    }

    look(name) {
        const entries = [...this.entries.keys()];
        const found = entries.find(entry => entry.name === name);
        return found ? found.description : `Can't find entry for ${name}`;
    }
}
