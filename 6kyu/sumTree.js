// Given a node object representing a binary tree:

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

// Pass in an object, a binary tree
// Return a number, the sum of all values in the tree
// {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}} -> 3

// Store a sum value and a "head" value
// Declare a recursive function that traverses through the tree
//      Add current value to sum
//      If a left node exists, traverse to it
//      If a right node exists, traverse to it
// Call the recursive traverse function
// Return the sum

function sumTheTreeValues(root) {
    let sum = 0,
        current = root;
    
    const traverse = node => {
        sum += node.value;
        
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    };

    traverse(root);
    return sum;
}

// Refactored to make the root function recursive

function sumTheTreeValues(root) {
    let sum = root.value;

    if (root.left) sum += sumTheTreeValues(root.left);
    if (root.right) sum += sumTheTreeValues(root.right);

    return sum;
}

// Refactored using ternary

function sumTheTreeValues(root) {
    return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
