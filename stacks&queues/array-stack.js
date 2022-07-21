class Stack {
	constructor() {
		this.stackArray = [];
		// this.bottom = stackArray[0];
		// this.length = stackArray.length;
	}
	peek() {
		return this.stackArray[this.stackArray.length - 1];
	}
	push(value) {
		this.stackArray.push(value)
		return this;
	}
	pop() {
		this.stackArray.pop();
		return this;
	}
	//isEmpty
}

const myStack = new Stack();
myStack.push('discord');
myStack.push('udemy');
myStack.push('test');
// myStack.pop()
console.log(myStack)
// console.log(myStack)

//Discord
//Udemy
//google