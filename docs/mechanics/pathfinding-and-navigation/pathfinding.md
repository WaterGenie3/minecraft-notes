---
sidebar_position: 3
pagination_prev: null
pagination_next: null
description: How mobs pathfind.
---

# Pathfinding

## A*

https://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html  
https://qiao.github.io/PathFinding.js/visual/

$$
g(n) = \sum{\text{euclidean distance between each consecutive nodes}} + \sum{\text{node's penalty}}
$$
$$
h(n) = 1.5 \times \text{euclidean distance between the node and the target}
$$

### Evaluation Limit

The number of nodes that can be evaluated is limited to 16 times the mob's base follow range.  
If no solution is found, the node with the smallest manhattan distance to the target is picked instead.

### Consequences

* Evaluation limit means the mob can get stuck in a local optima
if all evaluations from that point cannot get to a better node.
* The 1.5 factor in $h(n)$ means the heuristic is inadmissible, so optimal path is not guaranteed
even if the evaluation limit has not been reached.

Notes:

* Look into how successive nodes are computed
* Octile distance
* Examples
