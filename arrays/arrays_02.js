// Most data structures are built on top of other data structures
// Arrays in javascript are just objects with integer based keys that act like indexes.

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {}
	}

	// Takes in index to get the data from the index.
	get(index) {
		return this.data[index]
	}

	//adds data to the end of the array
	push(item) {
		this.data[this.length] = item;
		this.length++
		return this.length
	}

	// removes data from the end of the array
	pop() {
		const lastItem = this.data[this.length - 1]
		// The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index){
		for (let i = index; i < this.length - 1; i++){
			//Add the element in the next index. Shift.
			this.data[i] = this.data[i+1];
		}

		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('!')
newArray.push('test')
newArray.delete(0);

console.log(newArray);