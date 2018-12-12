#part 1

input = open('inputDay5', 'r').read()
tryAgain = True
while tryAgain:
    tryAgain = False
    first, second = 1, 0
    while first < len(input):
        if abs(ord(input[first]) - ord(input[second])) == 32:
            input = input[:second] + input[first+1:]
            tryAgain = True
            break;
        else:
            first = first + 1
            second = second + 1

print(len(input))