// Each node in a binary tree can only have either zero, one or two nodes
// Each child can only have one parent
// Each node has a certauin state

const BinaryTreeNode = () => {
	this.value = value
	this.left = null;
	this.right = null;
}

// A perfect binary tree has all the nodes full
// Nothing is missing

// A full tree has one or two nodes but not one
// The number of nodes on a perfect tree doubles with each node level
// The bottom level of a perfect tree has its number of nodes equal to the number of the nodes in the preceeding levels plus one.

// O(log N) because of the structure of trees.

// To calculate the number of nodes on a level we can do 2^0
/*
 For example, 
 level 0: 2^0 = 1
 level 1: 2^1 = 2
 level 2: 2^2 = 4
 level 3: 2^3 = 8;


 We can find out the number of nodes in a tree because, 2 to the power of tree levels - 1

 log nodes = steps
 log 100 = 2
 10^2 = 100

 This is O(log N)
*/
