def diagonal_difference(arr):
    l_sum = 0 
    r_sum = 0
    for i in range(len(arr)):
        l_sum = l_sum + arr[i][i]
        r_sum = r_sum + arr[(len(arr) - 1) - i]
    return abs(l_sum - r_sum)







        
        
