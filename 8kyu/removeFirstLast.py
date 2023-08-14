# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

# Pass in a string
# Return a string, first and last character removed
# "shrek" -> "hre"

def remove_char(str):
    return str[1:-1]
