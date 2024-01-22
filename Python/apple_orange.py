def countApplesAndOranges(s, t, a, b, apples, oranges):
    applesDistance = [x + a for x in apples]
    orangesDistance = [x + b for x in oranges]

    print((map(lambda n: n in range(s, t+1), applesDistance)))
    print(sum(map(lambda n: n in range(s, t+1), orangesDistance)))
