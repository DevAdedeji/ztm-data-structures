const boxes = ['a','b','c','d','e'];

const logArrayPairs = (array) => {
	for(let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length; j++){
			console.log(array[i], array[j]);
		}
	}
}

logArrayPairs(boxes);

// O(n^2)