# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# Pass in a number
# Return a string, even or odd, respectively
# 2 -> "Even"

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    return "Odd"

# Refactored

def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'
    