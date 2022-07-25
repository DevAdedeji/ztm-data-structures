// Depth first search follows the tree down as many nodes as possible, until the target node is found or the enbd is reached.

// When the search can't go further, it continues at the nearest ancestor with an unexplored child.

// Depth first search has a lower memory required because it's not necessary to store the child pointers on each level.

// We go depth first with depth first search.

// Depth first search can be implemented in three ways
// PreOrder, InOrder and PostOrdder

// InOrder gets everything inorder in a binary search tree
// PreOrder starts from the parent node and grab the child nodes left to right.
// Post order... going all the way down then going back up to the parent node.