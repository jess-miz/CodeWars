def timeConversion(s):
    t = s[-2]
    h = int(s[0:2])
    if t == 'P' and h == 12:
        return s[:-2]
    else:
        if t == 'P' and h < 12:
            return f'{(12+h):02}'+s[2:-2]
        elif h < 12:
            return s[:-2]
        else:
           return f'{(h-12):02}'+s[2:-2]
            
print(timeConversion('12:40:22AM'))
            

            