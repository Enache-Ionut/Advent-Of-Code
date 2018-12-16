import numpy
import re
from collections import Counter
import operator

def createMatrix():
    count = 0
    for i in range(0, len(positions), 2):
        matrix[i + 1][i] = count
        count += 1

    for raw in range(0, matrixDimension):
        for col in range(0, matrixDimension):
            dist = [abs(raw - (positions[index])) + abs(col - positions[index + 1]) for index in range(0, len(positions), 2)]
            matrix[raw][col] = dist.index(min(dist)) if dist.count(min(dist)) == 1 else -1000

def part1():
    occurences = numpy.full(int(max(positions)), 0, dtype=int)
    for line in matrix:
        for key, value in Counter(line).items():
            if -1000 != key:
                occurences[key] += value

    occurencesDict = {}
    for index in range(0, len(occurences)):
        occurencesDict.update({index: occurences[index]})
    sortedList = [(key, value) for (key, value) in sorted(occurencesDict.items(), key=operator.itemgetter(1)) if value != 0]

    for index in range(len(sortedList)-1, 0, -1):
        result = True
        for i in range(0, matrixDimension):
            if matrix[i][0] == sortedList[index][0] or matrix[i][matrixDimension-1] == sortedList[index][0] or matrix[0][i] == sortedList[index][0] or matrix[matrixDimension-1][i] == sortedList[index][0]:
                result = False
                break

        if result:
            return sortedList[index][1]

def part2():
    points = numpy.array([line.split(', ') for line in numbersAsString.splitlines()], dtype="int16")
    minX, minY = numpy.min(points, axis=0)
    maxX, maxY = numpy.max(points, axis=0)

    count = 0
    for i in range(minX, maxX + 1):
        for j in range(minY, maxY + 1):
            if numpy.abs(points - [i, j]).sum() < 10000:
                count += 1
    return count

numbersAsString = open("inputDay6", "r").read()
positions = [int(nr) for nr in re.findall(r'\d+', numbersAsString)]

matrixDimension = max(positions) + 1
matrix = numpy.full((matrixDimension, matrixDimension), -1000000, dtype=int)

createMatrix()
print(part1())
print(part2())
