const fibonacci = n => {
	if (n < 2) {
		return n
	}
	return fibonacci(n - 1) + fibonacci(n - 2)
}

const memoFibonacci = () => {
	let cache = {};
	return function fib(n) {
		if (n in cache) {
			return cache[n]
		} else {
			if (n < 2) {
				return n
			} else {
				cache[n] = fib(n - 1) + fib(n - 2);
				return cache[n];
			}
		}
	}
}

const fasterFib = memoFibonacci()
console.log('DP', fasterFib(10))

// this function is not very efficient
// this function can be optimized with dynamic programming or memoization.

// Dynamic programming combines divide abd conquer and memoization.