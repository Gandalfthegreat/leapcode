class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        seen0, seen1 = set(), set()
        queue = collections.deque()

        for node in range(len(graph)):
            if node not in seen0 and node not in seen1:
                queue.append((node, 0))
                seen0.add(node)

            while queue:
                poped, idx = queue.popleft()
                for nei in graph[poped]:
                    nei_idx = (idx+1) % 2
                    if nei not in seen0 and nei not in seen1:
                        queue.append((nei, nei_idx))
                        if nei_idx == 1:
                            seen1.add(nei)
                        else:
                            seen0.add(nei)
                    elif nei in seen0 and nei_idx == 1:
                        return False
                    elif nei in seen1 and nei_idx == 0:
                        return False

        return True
