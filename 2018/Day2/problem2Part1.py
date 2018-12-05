result2, result3 = 0, 0
for word in open("inputDay2.txt", "r").read().split('\n'):
    letters = {}
    counter2, counter3 = 0, 0
    for letter in word:
        if letter not in letters:
            numberOfLetters = word.count(letter)
            letters.update({letter: numberOfLetters})
            counter2 += numberOfLetters == 2
            counter3 += numberOfLetters == 3
    result2 += counter2 > 0
    result3 += counter3 > 0
print(result2 * result3)