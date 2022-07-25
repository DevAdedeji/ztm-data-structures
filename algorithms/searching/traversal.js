// Traversals
// Traversals means going from node to node and making sure that the node being searched for is found

// Traversal and search are often used interchangeably.
// Sometinmes though, we want to perform a particular operation on each node.

// Or the tree isn't sorted or it's an unordered graph
// Traversal is visiting every node... that's an O(n) operation.

// Breadth fisrt search/traversal
// Depth first search/traversal

// The main benefit of why we dont put complex data into jsut lists that are sorted is that we get the O(log n) searching.

// Trees and graphs work well for lots of cases. And there's better performance for something like an array.

// DFS vs BFS
// Both DFS and BFS do the same thing, technically. When should one be chosen over the other.

// The time complexity for DFS and BFS is the same. They all visit the nodes at least once.
// Breadth first search. Pros 
// Shortest Path.
// Closer nodes.

// Cons.
// Consumes More Memory.

// We always start off with the root node and search the closest nodes.
// If there's additional information. Then breadth first search.

// Depth First Search. Pros
// Depth first search consumes less memory.
// Graet for finding out if path exists

// Cons
// Can get slow

// https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare, 
// BFS (DFS will take long time. )

//If the tree is very wide:
// DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
// DFS

//determining whether a path exists between two nodes
// DFS

//Finding the shortest path
// BFS

// Graphs are used to model real life scenarios
// Recommendation engines for example, peer to peer networks etc

// BFS in graphs
// BFS allow us to convert a graph into a tree
// Also helps determine the shortest path...

// DFS in graphs
// 