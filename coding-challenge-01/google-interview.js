// Naive
function hasPairWithSum(arr, sum) {
	var len = arr.length;
	for (var i = 0; i < len - 1; i++) {
		for (var j = i + 1; j < len; j++) {
			if (arr[i] + arr[j] === sum)
				return true;
		}
	}

	return false;
}

// Better
function hasPairWithSum2(arr, sum) {
	const mySet = new Set();

	// The Set object lets you store unique values of any type, whether primitive values or object references.
	// Description
	// it is unique in the Set 's collection.
	// Set objects are collections of values.You can iterate through the elements of a set in insertion order.A value in the Set may only occur once;

	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (mySet.has(arr[i])) {
			// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
			return true;
		}
		mySet.add(sum - arr[i]);
	}
	return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9)