def part1(lines, nodes):
    result = str()
    while nodes:
        possibleNodes = list([node for node in nodes if all(node != secondNode for (_, secondNode) in lines)])  # selects the nodes which are not repeting in first and second position from tuples. Find the node from where you can go
        possibleNodes.sort()  # after sorting the node from where you can go is the first node because you need to take them in alphabetical order
        result += possibleNodes[0]  # save the node
        nodes.remove(possibleNodes[0])  # remove the node from nodes collection
        lines = [(firstNode, secondNode) for (firstNode, secondNode) in lines if firstNode != possibleNodes[0]]  # remove the tuples which contains the selected node on the first position because you already took in considerations this conditions
    return result

def part2(lines, nodes):
    t = 0
    workers = [0 for _ in range(5)]
    work = [None for _ in range(5)]
    while nodes or any(w > 0 for w in workers):
        possibleNodes = list([node for node in nodes if all(node != secondNode for (_, secondNode) in lines)])
        possibleNodes.sort(reverse=True)
        for index in range(5):
            workers[index] = max(workers[index] - 1, 0)
            if workers[index] == 0:
                if work[index] is not None:
                    lines = [(firstNode, secondNode) for (firstNode, secondNode) in lines if firstNode != work[index]]
                if possibleNodes:
                    node = possibleNodes.pop()
                    workers[index] = 60 + ord(node) - ord('A')
                    work[index] = node
                    nodes.remove(node)
        t += 1
    return t

lines = [(l[1], l[7]) for l in [line.split() for line in open('inputDay7', 'r').readlines()]]  # get an array of tuples with the nodes restrictions
nodes = set([s[0] for s in lines] + [s[1] for s in lines])  # get all nodes
print(part1(lines.copy(), nodes.copy()))
print(part2(lines, nodes))
