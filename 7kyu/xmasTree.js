// Complete the function that returns a christmas tree of the given height. The height is passed through to the function and the function should return a list containing each line of the tree.

// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
// XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
// Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.

// Examples
// The final idea is for the tree to look like this if you decide to print each element of the list:

// n = 5 will result in:

// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1      
// ____#____        2 - Trunk/Stem of Tree
// n = 3 will result in:

// __#__                  1
// _###_                  2
// #####          ----->  3 - Height of Tree
// __#__           1
// __#__           2 - Trunk/Stem of Tree

// Pass in a positive integer n
// Return an array of strings that together builds xmas tree of height n. 
// Each string equal length padded w/ _, last two elements are single # for stem
// 3 -> ['__#__', '_###_', '#####', '__#__', '__#__']

// Create an array of length n
// Map each element to have x #'s, where x = 2(i + 1) - 1
// Push 2 single # elements to the end of the array
// Pad the starts and ends of every element with _s to give them equal length
// Return array

function xMasTree(n){
    let arr = Array.from({length: n}, (_, i) => '#'.repeat(2 * (i + 1) - 1));
    const treeWidth = arr[n - 1].length;
    arr.push('#');
    arr.push('#');
    arr.forEach((_, i) => {
        while (arr[i].length < treeWidth) {
            arr[i] = '_' + arr[i] + '_';
        };
    });  
    return arr;
 }