let factorialCounter = 2;

const findFactorialRecursive = number => {
	if (number === 2){
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
}


const findFactorialIterative = number => {
	let answer = 1
		for (let i = 2; i <= number; i++) {
			answer = answer * i
		}
	return answer
}

console.log(findFactorialRecursive(5))