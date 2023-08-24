# Determine the area of the largest square that can fit inside a circle with radius r.

# Pass in a positive integer, radius r
# Return a number, area of largest square in circle of radius r
# 5 -> 50

# A side of the square = sqrt(2) * r

def area_largest_square(r):
    return ((2 ** 1/2) * r) ** 2 * 2

# Refactored

def area_largest_square(r):
    return 2 * r ** 2
