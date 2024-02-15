def reverse_alphabet(s):
    letters = [char for char in s if char.isalpha()]
    numbers = [char for char in s if char.isdigit()]

   
    letters.reverse()

    result = ''.join(letters + numbers)
    return result

print(reverse_alphabet("NEGIE1"))
