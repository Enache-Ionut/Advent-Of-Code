import re
import numpy as np

input = []
for line in open('inputDay3').readlines():
    input.append([int(number) for number in re.findall(r'-?\d+\.?\d*', line)])

matrixDimension = max([max(numbers) for numbers in input])
matrix = np.zeros((matrixDimension, matrixDimension))

# Part 1
for n, x, y, dx, dy in input:
    matrix[x:x+dx, y:y+dy] += 1
print(np.sum(matrix > 1))

# Part 2
for n, x, y, dx, dy in input:
    if np.all(matrix[x:x+dx, y:y+dy] == 1):
        print(n)
        break