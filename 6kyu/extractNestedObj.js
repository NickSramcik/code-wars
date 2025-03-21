// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };

// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

// return the nested property value if it exists,
// otherwise return undefined

Object.prototype.hash = function (string) {
    let current = this;
    const selector = string.split('.');
    
    for (property of selector) {
      if (current[property]) current = current[property];
      else {
        current = undefined;
        break;
      }
    }

    return current;
};

// Refactored

Object.prototype.hash = function (string) {
    let current = this;
    const selector = string.split('.');
    
    for (i = 0; current && i < selector.length; i++) {
      current = current[selector[i]];
    }

    return current;
};
