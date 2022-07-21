// Binary search trees are good at comparing data.

// Binary search trees preserves relationships

// All child nodes on the right should be greater than he left. The left always decreases

/*
	Lookup for a binarySearchTree is O(log N)

	insert is O(log N)

	delete is (O log N)

	IF a binary search tree is unbalanced, the time complexity can be O(n) considering worst case scenarios.
*/

// Binary Search trees pros and cons.

// Better performance. O(log N) is better thab O(n) if the tree is balanced
// Ordered
// Allowed for flexibility

// Cons include not allowing O(1) operations.

// Sorted data and parent child relationships as opposed to objects, arrays and hasnaps.

class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					// go left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left
				} else {
					// go right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		// Stops when a node has no children. Since that means that the value has been found.
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value){
				return currentNode;
			}
		}
		// Return false if nothing is found
		return false
	}
	// remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(170))
// console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = {
		value: node.value
	};
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}