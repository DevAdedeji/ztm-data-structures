//Create a functiom, reverse string that reverses a given string. For example Emmanuel should return leunammE
// Test
const reverseString = str => {
	let newString = ""
	for (let index = str.length - 1; index >= 0; index--) {
		newString += str[index];
	}
	return newString;
}

// o(n)

// solution
const reverseString2 = str => {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return `that's not correct`
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	console.log(backwards);
	return backwards.join('')
}

//Array built in methods on strings
const reverseString3 = str => {
	return str.split('').reverse().join('')
}

// ES6 SYNTAX
const reverseString4 = str => [...str].reverse().join('')

console.log(reverseString4('Emmanuel'))