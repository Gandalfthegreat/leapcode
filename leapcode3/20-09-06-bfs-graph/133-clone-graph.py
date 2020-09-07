class Solution(object):
    def cloneGraph(self, node):
        if not node:
            return
        nodeCopy = Node(node.val, [])
        dic = {node: nodeCopy}
        queue = collections.deque([node])
        while queue:
            node = queue.popleft()
            for neighbor in node.neighbors:
                if neighbor not in dic:  # neighbor is not visited
                    neighborCopy = Node(neighbor.val, [])
                    dic[neighbor] = neighborCopy
                    dic[node].neighbors.append(neighborCopy)
                    queue.append(neighbor)
                else:
                    dic[node].neighbors.append(dic[neighbor])
        return nodeCopy
