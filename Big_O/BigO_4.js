const SayHi = n => {
	for (let i = 0; i < n; i++){
		console.log('hi!');
	}
}
//SayHi has a space complexity of O(1). This is considering variable i declaration in the for loop.

const hiArrayFunction = n => {
	let hiArray = [];
	for (let i = 0; i < n; i++){
		hiArray[i] = 'hi';
	}
	return hiArray;
}

// hiArrrayFunction has a space complexity of O(n). Considering variable assignment in the for loop.