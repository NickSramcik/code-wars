// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true


// Pass in a string and an array of strings
// Return boolean

// Store the length of the input string as n
// While n > 0...
    // if str is not in array, return false
    // put string's last character in front
    // decrement n
// We've reatched the end, return true

function containAllRots(str, arr) {
    let n = str.length;

    while (n > 0) {
        if (!arr.includes(str)) return false;
        str = str.slice(-1, str.length) + str.slice(0, -1);
        n--;
    }

    return true;
}
