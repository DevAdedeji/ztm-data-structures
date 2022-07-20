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
		this.next = null
	}
}


class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	// Add an element to the tail or end of the linked list
	append(value) {
		const newNode = new Node(value);
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
			next: null
		};
		newNode.next = this.head;
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
		const holdingPointer = leader.next
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList()
	}

	remove(index){
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

const myLinkedList2 = new LinkedList(14);
myLinkedList2.prepend(4)
myLinkedList2.append(7)
myLinkedList2.append(5)
myLinkedList2.insert(2, 48)
myLinkedList2.remove(2)

console.log(myLinkedList2.printList())