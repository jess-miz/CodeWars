def minAndMax(arr):
    sortedArr = sorted(arr)
    min = sum(sortedArr[0:4])
    max = sum(sortedArr[1:5])
    print(min, max)
