// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// firstNode > secondNode > thirdNode

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev = null) {
    if (!head) return prev;
    let next = head.next;
    head.next = prev;
    return reverseList(next, head)
};

// Refactored without using recursion

var reverseList = function(head) {
    // If head has no value, return null
    if (!head) return null;
    // Declare current and previous nodes
    // Set current to head, prev to null
    let current = head,
    prev = null;
    // Loop through the linked list...
    // While current has a value
    while (current) {
        // Declare temporary placeholder, set to next
        const temp = current.next;
        // Set next to prev
        current.next = prev;
        // Set prev to current
        prev = current;
        // Set current to temp
        current = temp;
    }
    // Return prev
    return prev;
};

// Test Cases

const list = {val: 1, next: { val: 2, next: { val: 3, next: null }}};
console.log('Start:', list);
console.log('Reversed:', reverseList(list));