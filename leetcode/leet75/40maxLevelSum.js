// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// Example 1:

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

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
 * @return {number}
 */
// Store a result, queue, maxSum, and height
// Set queue to root wrapped in an array
// Return 1 if input is nullish
// While queue has length...
    // Store queue length as n
    // Store sum and set to 0
    // Loop through the queue
        // Store node as the next value in queue
        // Incrememnt sum by node's value
        // If children exist, push them to queue (left first)
    // If sum > maxSum
        // Set maxSum to sum
        // Set result to height
    // Increment height by 1
// Return result

var maxLevelSum = function(root) {
    if (!root) return 1;

    const queue = [root];
    let result = 1,
        height = 1,
        maxSum = root.val;
    
    while (queue.length) {
        const n = queue.length;
        let sum = 0;

        for (i = 0; i < n; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (sum > maxSum) {
            maxSum = sum;
            result = height;
        }

        height++;
    }

    return result;
};
