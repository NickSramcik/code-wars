// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Pass in an array of positive integers, and a positive integer
// Return a poisitive integer, the total time elapsed
// [2,2,3,3,4,4], 2 -> 9

// Store an array representing checkout lines, length equaling second input
// Loop through the input array and add each number to the smallest value in checkout array
// Return the checkout array's max value

function queueTime(customers, n) {
    const checkout = Array.from({length: n}).fill(0);
    
    for (customer of customers) {
        const min = checkout.indexOf(Math.min(...checkout))
        checkout[min] += customer;
    }

    return Math.max(...checkout);
}
