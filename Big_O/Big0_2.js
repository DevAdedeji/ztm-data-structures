const printItems = (items) => {
	console.log(items[0]);
	const middleIndex = Math.floor(items.length/2);
	const index = 0;
	
	while(index < middleIndex){
		console.log(items[index]);
		index++
	}


	for (let i = 0; i < 100; i++){
		console.log('hi')
	}
}

// O(n)