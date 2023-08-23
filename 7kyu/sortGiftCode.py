# Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

# Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

# Sort the Gift Code
# Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

# Examples (Input -- => Output):
# "abcdef"                      -- => "abcdef"
# "pqksuvy"                     -- => "kpqsuvy"
# "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

# Pass in a string
# Return that string sorted alphabetically

# Sort the string and change back to string, return

def sort_gift_code(code):
    return ''.join(sorted(code))
