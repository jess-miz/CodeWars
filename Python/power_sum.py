def powerSum(X, N):
    return recursivePowerSum(X, N, 1)
def recursivePowerSum(X, N, num):
    value = X - pow(num, N)
    if value < 0:
        return 0
    elif value == 0:
        return 1
    else:
        return print(recursivePowerSum(value, N, num + 1)) + recursivePowerSum(X, N, num + 1)
    


print(powerSum(13, 2))