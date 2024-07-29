// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

// Pass in an object
// Return a number

// Let result be 0
// If input is string, increment result
// If input is iteratable, recurse this function with each item of list/obj
// Return result

function strCount(obj, result = 0) {
    if (typeof obj == 'string') result++;
    else if (typeof obj == 'object') {
        for (item in obj) {
            result += strCount(obj[item])
        }
    }

    return result;
}

// Refactored 

function strCount(obj) {
    let result = 0;

    for (key in obj) {
        if (typeof obj[key] == 'string') result++;
        if (typeof obj[key] == 'object') result += strCount(obj[key]);
    }

    return result;
}
