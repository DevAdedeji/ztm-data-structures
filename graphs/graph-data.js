// Graphs are built on top other data structures. Linked lists and trees.
// Edge list
/*
		2	- 0
		/ \
	1	-	3
*/

const graph = [
	[0, 2],
	[2, 3],
	[2, 1],
	[1, 3]
];

// The array of arrays above is an edge list the shows the connected nodes in the graph.

// Adjacent list/adjacency
const graph2 = [
	[2],
	[2, 3],
	[0, 1, 3],
	[1, 2]
]

// This can be stored as objects too.
// It can be useful if we dont have a sequential number as the nodes

// Ajdacent matrix
const graph3 = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0]
]

// Connected nodes are represented by truthy and falsy valies of 0 and 1
// If the graph is weighted, then the truthy value can be represented with the value being passed between the edges
// This can also be represented with an object
const graph3Object = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0]
}