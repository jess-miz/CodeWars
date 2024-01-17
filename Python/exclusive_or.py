# Answer #
def xor(a,b):
    if a == True and b == True:
        return False
    elif a == True or b == True:
        return True
    else: 
        return False
    
# OR (see what I did there :D) #
def xor(a,b):
    return a != b