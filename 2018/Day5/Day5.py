def part1(inputStr):
    tryAgain = True
    while tryAgain:
        tryAgain = False
        first, second = 1, 0
        while first < len(inputStr):
            if abs(ord(inputStr[first]) - ord(inputStr[second])) == 32:
                inputStr = inputStr[:second] + inputStr[first + 1:]
                tryAgain = True
                break
            else:
                first += 1
                second += 1
    return len(inputStr)

def part2(input):
    minLength = []
    uniqueLetters = set(input.lower())
    for ch in uniqueLetters:
        newLine = input.replace(ch, '')
        newLine = newLine.replace(chr(ord(ch)-32), '')
        minLength.append(part1(newLine))
    return min(minLength)

print(part1(open('inputDay5Part1', 'r').read()))
print(part2(open('inputDay5Part2', 'r').read()))
