# Given an array of 4 integers
# [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

# For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

#    a:x1
#    b:y1
#    c:x2
#    d:y2
# Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

# pass in an array of numbers
# return a number in string form
# [10,50,30,150] -> "5"

# Take the absolute value of a - c and b - d. Return b-d / a-c

def find_slope(points):
    rise = points[3] - points[1]
    run = points[2] - points[0]
    if run == 0:
        return 'undefined' 
    return str(round(rise / run))

# Refactored using except

def find_slope(points):
    x1, y1, x2, y2 = points
    try:
        return str( round((y2 - y1) / (x2 - x1)) )
    except ZeroDivisionError:
        return 'undefined'
    