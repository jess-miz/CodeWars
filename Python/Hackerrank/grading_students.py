import math
def gradingStudents(grades):
    grade = []
    for i in range(len(grades)):
        roundedGrade = math.ceil(grades[i] / 5) * 5
        difference = (roundedGrade - grades[i])
        if difference >= 3 or grades[i] <= 38:
            grade.append(grades[i])
        else:
            grade.append(roundedGrade)
    return grade