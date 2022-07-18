// Objects in javascript are a type of hashmap.
// Hashmaps are efficient because the values are stored in a hash that is kept in memory. This is usually managed by a hash function.
// But since the hashmap is usually assigned a memory address randomly, it means it can be susceptible to hash collisions.

// Hash collisions happen when multiple values are assigned to the same address in memory, causing a colliion in that regard.

let user = {
	age: 23,
	name: 'Jermaine',
	magic: true,
	sayHi: function(){
		console.log('hi')
	}
}

console.log(user.age) // O(1) Reading
user.scream = 'haaaa' // Insertion O(1)
console.log(user)

// Objects in javascript only allow strings. If passed a value of any other type, it gets stringified

// New in ES6
// A map is different from an object because it allows you to save any data type as the key. An object only allows saving tyhe key as a string.
// A map maintains insertion order.
const a = new Map()
const b = new Set()

// Sets are very similar to objects, the only difference is that a set stores the keys and no values.