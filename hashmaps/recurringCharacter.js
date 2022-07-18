//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
	// Define an object for values found.
	const valueObject = {};
	// Loop through the array
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]){
				return input[i]
			}
		}
	}
	return undefined;
	// Check if duplicates are found in the valuesArray
	// If no duplicates are found, just return the array.
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2