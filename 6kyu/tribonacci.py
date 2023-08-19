# Well met with Fibonacci bigger brother, AKA Tribonacci.

# As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

# So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

# [1, 1 ,1, 3, 5, 9, 17, 31, ...]
# But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

# [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
# Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

# Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

# Pass in an array of 3 numbers, and a positive integer n
# Return an array with the first n terms of the sequence with the input seed array
# [1,1,1], 10 -> [1,1,1,3,5,9,17,31,57,105] 

# Store a result array
# Run a loop from 1 to n
# If input[n-1] exists, add it to result array
# Otherwise, add the previous 3 elements and add that sum to the result array
# Return the result array

def tribonacci(seed, n):
    result = []
    for i in range(n):
        if i < 3: 
            result.append(seed[i])
        else:
            result.append(result[i - 1] + result[i - 2] + result[i - 3])
    return result

# Refactored

def tribonacci(seed, n):
    result = seed[:n]
    for i in range(n - 3):
        result.append(sum(result[-3:]))
    return result

# Refactored using while loop

def tribonacci(seed, n):
    while len(seed) < n:
        seed.append(sum(seed[-3:]))
    return seed[:n]
