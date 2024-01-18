def countingValleys(steps, path):
    level, valleys = 0,0
    for step in path:
        level += 1 if step == 'U' else - 1
        valleys += 1 if level == 0 and step == 'U' else 0
    return valleys
