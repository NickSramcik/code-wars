// You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

// Rules
// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney
// Example
// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };

// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
//     // no distributeGifts() and no goDownTheChimney()
// };

// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE

// Pass in an object
// Return boolean

// Run sayHoHoHo(), distributeGifts(), and goDownTheChimney() and check that outputs are correct
// If all outputs are correct, return true, otherwise return false

function isSantaClausable(obj) {
    return obj.sayHoHoHo.toString().includes("console.log('Ho Ho Ho!')") &&
           obj.distributeGifts.toString().includes("console.log('Gifts for all!')") &&
           obj.goDownTheChimney.toString().includes("console.log('*whoosh*')");
}

// Previous doesn't work because the challenge is ridiculous
// Either the test cases are broken or the task explanation is insufficient/wrong
// Checking if every method is a function in the input object works for some reason, despite not following the constraints of the challenge

function isSantaClausable(obj) {
    const methods = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
    return methods.every(methodName => typeof obj[methodName] == "function");
}
