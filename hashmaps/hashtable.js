class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	// _ before is synthetic function for a private function.
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
			// charCodeAt() gives a value between 0 and 65535
			console.log(hash)
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value])
			console.log(this.data)
		}
		this.data[address].push([key, value])
		return this.data
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		console.log(currentBucket);
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1]
				}
			}
		} //0(1)
		return undefined;
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0])
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.get('grapes'))
myHashTable.set('grapes', 15)
myHashTable.set('apples', 9)
myHashTable.set('oranges', 3)
myHashTable.get('apples')
console.log(myHashTable.keys())