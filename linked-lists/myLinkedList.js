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

class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value){
		const newNode = {
			value: value,
			next: null
		}
		this.tail.next = newNode;
		this.tail = newNode
		this.length++
	}
}

const myLinkedList2 = new LinkedList(10);
myLinkedList.append(5)
console.log(myLinkedList2)