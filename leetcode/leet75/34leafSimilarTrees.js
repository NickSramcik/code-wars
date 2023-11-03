// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:

// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

// Constraints:

// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // Store a sequence for each input tree
    const seq1 = [],
          seq2 = [];
    // Recursively traverse each tree
    // If a next node doesn't exist, push current value to respective sequence
    const traverse = function(node, sequence) {
        if (node.left) traverse(node.left, sequence);
        if (node.right) traverse(node.right, sequence);
        if (!node.right && !node.left) sequence.push(node.val);
    }
    traverse(root1, seq1);
    traverse(root2, seq2);
    // Return false if sequence lengths are unequal
    if (seq1.length !== seq2.length) return false;
    // Loop through the first sequence
    for (i = 0; i < seq1.length; i++) {
        // If current val of seq1 !== current val of seq2, return false
        if (seq1[i] !== seq2[i]) return false;
    }
    // Return true
    return true;
};

// Refactored

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const seq1 = [],
          seq2 = [];
    
    const traverse = function(node, sequence) {
        if (node.left) traverse(node.left, sequence);
        if (node.right) traverse(node.right, sequence);
        if (!node.right && !node.left) sequence.push(node.val);
    }

    traverse(root1, seq1);
    traverse(root2, seq2);

    return seq1.join('.') == seq2.join('.');
};
