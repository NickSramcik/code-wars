let donkey = ['a', 'b', 'c'];

function shrek(array) {
    let result = [];

    array.forEach(e => result.push(e + 'hello'));
    return result;
}

console.log(donkey);
console.log(shrek(donkey));
