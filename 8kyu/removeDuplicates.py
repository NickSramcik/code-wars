# Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

# The order of the sequence has to stay the same.

# Examples:

# Input -> Output
# [1, 1, 2] -> [1, 2]
# [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

# Pass in an array
# Return the array with duplicate values removed

# convert array to set, then back to array, then return

def distinct(seq):
    return list(set(seq))

# This works but it screws up the order

# Add to new array if not already there

def distinct(seq):
    result = []
    [result.append(x) for x in seq if x not in result]
    return result

# Fix the set version to preserve old order

def distinct(seq):
    return sorted(set(seq), key = seq.index)
