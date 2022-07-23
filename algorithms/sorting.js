// Sorting is not a a big deal with small input data

const letters = ['c', 'j', 't', 'a', 'f'];
letters.sort()

// sorting becomnes a problem when inputs get larger and larger
// e.g google has a lot of indexed websites
// Amazon is all about sorting products too etc

// Companies handling large data sets use custom data sorting
// If the companies use an inefficient sorting algorithm, they'll lose a lot of money.

// There's so many sorting algorithms
// Bubble Sort
// Insertion Sort
// Selection Sort
// Merge sort
// Quick sort

/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Given string s

Input: s = "tree"
Output: "eert"
*/

// const descendingOrder = s => {
// 	let tempArray = []
// 	for (let i = 0; i < s.length; i++) {
// 	  // The value of the string characters found in the string should be pushed to the array.
// 	  tempArray.push(s[i])
// 	  // Find the number of times each element exists in the array.
// 	  if (tempArray[i]){
		  
// 	  }
// 	}
// 	return tempArray
//   }
  
//   console.log(descendingOrder('tree'))