# Answer #
def compareTriplets(a, b):
    alice_points = 0
    bob_points = 0
    i = 0
    while i < len(a):
        if a[i] > b[i]:
            alice_points += 1
        elif a[i] < b[i]:
            bob_points += 1
        i += 1
    return alice_points, bob_points