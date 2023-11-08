// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Store a result array
// Store a dfs function tracking tree height
    // Return if current node nullish
    // Set result array value to current node value @ index of current height
    // Traverse left and right, increment height by 1

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
   const result = [];
   const dfs = function(node, height) {
        if (!node) return;
        result[height] = node.val;
        dfs(node.left, height + 1);
        dfs(node.right, height + 1);
   }

   dfs(root, 0);
   return result;
};
