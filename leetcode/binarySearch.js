// Create a binary search tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;
        const newNode = new Node(value);

        // Recursive function to search the tree
        const searchTree = node => {
            // If value < node.value, go left
            if (value < node.value) {
                // If no left child, append new node to left
                if (!node.left) {
                    node.left = newNode;
                }
                // If left child exists, look left again
                else {
                    searchTree(node.left);
                }
            }
            // If value > node.value, go right
            else if (value > node.value) {
                // If no right child, append new node to left
                if (!node.right) {
                    node.right = newNode;
                }
                // If right child exists, look right again
                else {
                    searchTree(node.right);
                }
            }
        };

        searchTree(this.root);
    }

    min() {
        // Traverse the tree leftwards until no child node exists. Return the leaf node here.
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    max() {
        // Traverse the tree rightwards until no child node exists. Return the leaf node here.
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    contains(value) {
        // Traverse the tree until value is found. Return true if found.
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        // Value never found, return false
        return false;
    }

    // Depth first search (branch by branch)

    // In-order
    // Left, root, right
    dfsInOrder() {
        let result = [];

        const traverse = node => {
            // If left child exists, go left again
            if (node.left) traverse(node.left);
            // Capture root node value
            result.push(node.value);
            // If right child exists, go right again
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return result;
    }

    // Pre-order
    // Root, left, right
    dfsPreOrder() {
        let result = [];

        const traverse = node => {
            // Capture root node value
            result.push(node.value);
            // If left child exists, go left again
            if (node.left) traverse(node.left);
            // If right child exists, go right again
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return result;
    }

    // Post-order
    // Left, right, root
    dfsPostOrder() {
        let result = [];

        const traverse = node => {
            // If left child exists, go left again
            if (node.left) traverse(node.left);
            // If right child exists, go right again
            if (node.right) traverse(node.right);
            // Capture root node value
            result.push(node.value);
        };

        traverse(this.root);
        return result;
    }

    // Breadth first search (level by level)

    // Use a queue
    bfs() {
        let result = [],
            queue = [];

        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift();

            result.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

const bst = new BinarySearchTree(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

// TEST CASES

console.log('size = ', bst.size());

console.log('min = ', bst.min());
console.log('max = ', bst.max());

console.log('contains 2? ', bst.contains(2));
console.log('contains 9? ', bst.contains(9));

// Depth first searches
console.log('DFS in-order 2, 3, 12, 15, 28, 36, 39 =', bst.dfsInOrder());
console.log('DFS pre-order 15, 3, 2, 12, 36, 28, 39 =', bst.dfsPreOrder());
console.log('DFS post-order 2, 12, 3, 28, 39, 36, 15 =', bst.dfsPostOrder());

// Breadth first search
console.log('BFS 15, 3, 36, 2, 12, 28, 39 =', bst.bfs());

console.log(bst);
