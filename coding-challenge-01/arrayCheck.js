// Fuuntion that returns true or false if the same element is found in two arrays.
//For example array1 = ['a', 'b', 'c', 'd'] 
// and array2 = ['z', 'g', 'k']

// arrayCheck(array1,array2) should return false

//using a nested for loop to check run through the arrays and compare the values. O(n^2)

const array1 = ['a', 'b', 'c', 'd']
const array2 = ['z', 'a', 'j']

// const arrayCheck = (arr1, arr2) => {
// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = 0; j < arr2.length; j++) {
// 			if (arr1[i] === arr2[j]) {
// 				return true
// 			}
// 		}
// 	}
// 	return false
// }

//This runs but runs at O(a*b)... since the arays might not always contain the same number of elements, not the most efficient approach.

// const arrayCheck = (arr1, arr2) => {
// 	// Loop through first array and create object where property === items in the array
// 	const mapObject = {};
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (!mapObject[arr1[i]]) {
// 			const mapItem = arr1[i];
// 			mapObject[mapItem] = true
// 		}
// 	}
// 	//Loop through second array and check if the item in the second array exists on the created object.
// 	for (let j = 0; j < arr2.length; j++) {
// 		if (mapObject[arr2[j]]) {
// 			return true
// 		}
// 	}
// 	return false
// }
// This runs in linear time which is O(n) or O(a+b) in the case of this function.


//Clean code up
const arrayCheck = (arr1, arr2) => {
	// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

	// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

	return arr1.soome(item => arr2.includes(item));
};

console.log(arrayCheck(array1, array2))