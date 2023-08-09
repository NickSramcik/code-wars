# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

# Pass in an array of numbers
# Return a number, the sum of positive numbers

# Store a sum
# Loop through the array
# If current num is > 0, add it to sum
# Return sum

def positive_sum(arr):
    sum = 0
    for number in arr:
        if number > 0: 
            sum += number 
    return sum

# Refactored using sum method

def positive_sum(arr):
    return sum(n for n in arr if n > 0)
    