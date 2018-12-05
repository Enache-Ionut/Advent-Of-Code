numbers = open("input.txt", "r").read().split('\n')
currentSum = 0
sums = {currentSum : 1}
loop = True
while loop:
    for nr in numbers:
        currentSum += int(nr)
        if currentSum in sums:
            print(currentSum)
            loop = False
            break
        else:
            sums.update({currentSum : 1})