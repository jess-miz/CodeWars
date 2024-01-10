def rotateLeft(d, arr):
    i = 0
    while i < d:
        deleted = arr.pop(0)
        arr.append(deleted)
        i += 1
    return arr

print(rotateLeft(3, [3, 7, 5, 8, 10]))
