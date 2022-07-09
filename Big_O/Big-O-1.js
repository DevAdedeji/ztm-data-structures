const nemo = ['nemo']
const cars = ['mercedes benz', 'audi', 'bmw', 'toyota', 'land rover', 'nissan', 'dodge', 'ford']
const large = new Array(1000).fill('nissan');

function findNemo(array) {
	// let t0 = performance.now();
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'nissan') {
			console.log('found nissan!')
		}
	};
	// let t1 = performance.now();
	// console.log('function took ' + (t1 - t0) + ' milliseconds')
};

const findNemo2 = array => {
	array.forEach(car => {
		if (car === 'nissan'){
			console.log('found nissan')
		}
	})
}
//forEach function

const findNemo3 = array => {
	for(let car of array) {
		if (car === 'nissan'){
			console.log('found nissan')
		}
	}
}

// O(n)

findNemo(cars);
findNemo2(cars);
findNemo3(cars);
