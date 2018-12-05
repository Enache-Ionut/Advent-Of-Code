words = open("inputDay2.txt", "r").read().split('\n')
for firstWord in words:
    for secondWord in words:
        if sum(firstWord != secondWord for firstWord, secondWord in zip(firstWord, secondWord)) == 1:
            resultTouple = [(firstWord, secondWord) for firstWord, secondWord in zip(firstWord, secondWord)]
            result = "".join([first if first == second else "" for first, second in resultTouple])
print(result)