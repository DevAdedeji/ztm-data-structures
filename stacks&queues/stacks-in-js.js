// what is program?
// A program allocates memory, runs and executes scripts.
// An engine consists of the memory heap and the call stack.

const a = 1;
// This allocates a emeory in the engine.

// Memory leak
// There's always a limited number of memory.
// Memory leaks happens when the memory is used up. When data allocated to a memory isnt being used.

// Call stack
console.log(1)
console.log(2)
console.log(3)
// The order of execution.
// 1
// 2
// 3
// gets logged to the console

const one = () => {
	const two = () => {
		console.log(4)
	}
}

// Call stack real quick
// one() gets called
// two gets called and pushed on top of one
// 4 is then logged to the console and pusshed on top of two

// When done
// console.log statement gets popped
// two gets popped
// one gets popped

// Javascript is single threaded and it can be non blockingt
// This means that javascript has just one call stack running on a thread
// Other multithreaded langusges can have multiple call stacks

// issues with multirthreaded programming languages includes deadlocks

// Synchronous programming means one line gets executed, then another gets executed. One after the other.

// A recursive function without a base case causes a stack overflow