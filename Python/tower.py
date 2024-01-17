def tower(num):
   i = 1
   while i <= num:
      stars = (i * '#')
      spaces = ((num - len(stars)) * ' ')
      print(spaces + stars)
      i+= 1
