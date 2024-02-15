def longest(sentence):
    words = sentence.split()

    longest_word = max(words, key=len)

    return longest_word, len(longest_word)

word, length = longest("Saya sangat senang mengerjakan soal algoritma")
print(f"{word}: {length} karakter")
