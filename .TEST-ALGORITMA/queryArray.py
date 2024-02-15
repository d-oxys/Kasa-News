def count_occurrences(input_array, query_array):
    count_dict = {word: input_array.count(word) for word in query_array}

    output = list(count_dict.values())

    return output

INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']
print(count_occurrences(INPUT, QUERY))
