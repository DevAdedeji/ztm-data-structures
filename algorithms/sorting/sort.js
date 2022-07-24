const letters = ['c', 'j', 't', 'a', 'f'];
letters.sort()

// The issue with sort()
// Don't trust that the built in sort in method in the language sorts data correctly

let basket = [2, 65, 74, 69, 5, 2, 1, 7, 8]

// To sort the numbers properly, we can run
basket = basket.sort(function(a, b) {
	return a - b;
});

console.log(basket)

// Dosen't sort correctly...
// The sort method in javascript works with numbers by first converting them to strings

// It then checks the value of the unicode of those numbers against each other
// For certain numbers that are actually larger, their unicode values can be lower

// The time and space complexity of the sort method can also not be guaranteed.

// This is dependent on the browser too.

// An array of yoruba words
const yoruba = ['ina', 'ero', 'obinrin', 'osupa', 'agbalagba']
console.log(yoruba.sort());

// In certian cases the words wont be properly sorted because of the unicode characters.
// In the case of special characters

yoruba.sort((a, b) => {
	return a.localeCompare(b)
});

// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.

// Things can be sorted in many ways