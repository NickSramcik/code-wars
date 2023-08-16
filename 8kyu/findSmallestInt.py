# Given an array of integers your solution should find the smallest integer.

# For example:

# Given [34, 15, 88, 2] your solution will return 2
# Given [34, -345, -1, 100] your solution will return -345
# You can assume, for the purpose of this kata, that the supplied array will not be empty.

# Pass in an array
# Return a number, smallest num in array
# [1, 2, 3] -> 1

# Sort the array from smallest to biggest
# Return the first element

def find_smallest_int(arr):
    return sorted(arr)[0]

# Refactored to return the array's minimum value

def find_smallest_int(arr):
    return min(arr)
