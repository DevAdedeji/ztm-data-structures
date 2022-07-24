// Big O for merge sort and quick sort
// O(n log n)

// Merge sort and Quick Sort use the divide and conquer technique for sorting data and the idea of recursion

// Divide and conquer gives a log of n advantage
// Divide a list into sub lists
// Divide the sublists further
// When done dividing into two elements
// Determine which to swap to the previous index if it's larger

// Merge sort is one of most efficient algorithms
// It uses recursion for the divide and coquer approach

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
	if (array.length === 1) {
		return array
	}
	// Split Array in into right and left
	const length = array.length;
	const middle = Math.floor(length / 2)
	const left = array.slice(0, middle)
	const right = array.slice(middle)
	// console.log('left:', left);
	// console.log('right:', right);


	return merge(
		mergeSort(left),
		mergeSort(right)
	)
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length &&
		rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++
		}
	}
	// console.log(left, right)
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

// Stable and unstable algorithms

// A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.

