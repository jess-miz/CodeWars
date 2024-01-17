from collections import Counter
def matchingStrings(stringList, queries):
    map = Counter(stringList)
    print(map)
    result = []
    for s in queries:
        if s in map.keys():
            result.append(map[s])
        else:
            result.append(0)
    return result

            
print(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'bc', 'abc']))