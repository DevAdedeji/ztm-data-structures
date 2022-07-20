// Doubly linked lists allow us to traverse our linked list backward.
// Searching can be more efficient in doubly linked lists

// 14-->7-->5

let myLinkedList = {
	// Linked Lists start with a head
	// Think of nodes as buckets of data
	head: {
		value: 14,
		// Pointer to the next node 
		next: {
			value: 7,
			next: {
				value: 5,
				// Null terminates a linked list
				next: null
			}
		}
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null,
			this.prev = null
	}
}


class doublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	// Add an element to the tail or end of the linked list
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode
		this.length++
		return this
	}
	// O(1)

	// Add an element to the head or start of the linked list
	prepend(value) {
		const newNode = {
			value: value,
			next: null,
			prev: null
		};
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++
		return this;
	}
	// O(1)

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value)
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1)
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		console.log(this)
		return this.printList()
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1)
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
	// O(N)


	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++
		}
		return currentNode;
	}
	// O(N)

}

const mydoublyLinkedList2 = new doublyLinkedList(14);
mydoublyLinkedList2.append(4)
mydoublyLinkedList2.append(7)
mydoublyLinkedList2.prepend(5)
mydoublyLinkedList2.insert(2, 48)
// myLinkedList2.remove(2)

console.log(mydoublyLinkedList2.printList())