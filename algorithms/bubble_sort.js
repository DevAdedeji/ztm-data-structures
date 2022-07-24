// Bubble sort
// Bubble Sort
// Insertion Sort 
// Selection Sort

// These three algorithms are called elementary sort

// Merge Sort and Quick Sort
// These are more complex and can be more efficient

// Bubble sort comes from the idea of bubbling up the largest value by using multiple passthroughs

// Bubble sort is not the most efficient sorting algorithm
// Bubbble sort is one of the simplest sorting algorithms but also one of the most inefficient

// Best time complexity = O(n)
// Average time complexity = O(n^2)
// Worst time complexity = O(n^2)
// Space complexity = O(1) since no new data structures are being created

const numbers = [39, 44, 5, 47, 2, 15, 2, 45, 20, 96]

const bubbleSort = arr => {
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		for (j = 0; j < length; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap numbers
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

bubbleSort(numbers);
console.log(numbers)