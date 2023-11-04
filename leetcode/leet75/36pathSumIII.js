// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    // Declare a count of valid paths and a map of path sums
    let validPaths = 0;
    const pathMap = {};
    // Declare a recursive traversal function, include sum of current path
    const traverse = function(node, pathSum) {
        // Return if current node is nullish
        if (!node) return;
        // Add current value to path sum
        pathSum += node.val;
        // --Check for paths starting at root--
        // If path sum == target sum, increment count
        if (pathSum == targetSum) validPaths++;
        // --Check for paths starting within the tree--
        // Store difference between path sum and target sum
        const surplus = pathSum - targetSum;
        // Check map for that difference and increment count by its frequency
        if (pathMap[surplus]) validPaths += pathMap[surplus];
        // Memoize current path sum and its frequency
        pathMap[pathSum] = pathMap[pathSum] + 1 || 1;
        // Traverse left, then right
        if (node.left) traverse(node.left, pathSum);
        if (node.right) traverse(node.right, pathSum); 
        // We're at a leaf, remove current path sum from map
        pathMap[pathSum]--;
    }
    // Call the traversal function
    traverse(root, 0);
    // Return path count
    return validPaths;
};

// Refactored without using maps or a stored path count

var pathSum = function(root, targetSum) {
    if (!root) return 0;

    const search = function(node, targetSum) {
        if (!node) return 0;
        
        return (node.val == targetSum ? 1 : 0) + 
               search(node.left, targetSum - node.val) +   
               search(node.right, targetSum - node.val);
    }

    return search(root, targetSum) + 
           pathSum(root.left, targetSum) +
           pathSum(root.right, targetSum);
}
