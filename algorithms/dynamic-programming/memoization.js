// memoization --- caching
// caching is a way to store values for use later on.

// Caching refers to a way to speed up programs and hold some peice of data in an easily accessible box.

// Memoization is a specific form of programming used a lot in dynamic programming.

const addNumber = n => n + 65;


const memoAddNumber = n => {
	let cache = {
		5: 85
	};
	return n => {
		if (n in cache) {
			return cache[n]
		}
		// this checks if a property exists in an object in javascript
		else {
			console.log('this takes a while')
			cache[n] = n + 80;
			return cache[n]
		}
	}
}

const memoized = memoAddNumber()

console.log(memoAddNumber(4))
console.log(memoAddNumber(4))

// Mmeoization is a specific form of caching that involves caching the return value.

// Memoization remembers a sub problem so it dosent have to be calculated again

// Ideally, it's good to have the cache inside the function and not polluting the global scope.

// But everytime the memoAddNumber function runs, the cache gets reset. And becomes an empty object.

// Uses closures to access cache inside the child function. This helps avoid polluting the global scope

// Dymanic programming helps used memoization for code optimization.