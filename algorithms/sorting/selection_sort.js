// Selection sort is one of the simpler ways to sort a list
// Selection sort works by scanning a list of items for the smallest element and swapping the element for the one in the first position

// With selection sort there's a time complexityy of O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				//update minimum if current is lower that what we had previously
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}


console.log(selectionSort(numbers))