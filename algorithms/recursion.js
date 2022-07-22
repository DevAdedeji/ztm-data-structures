// Recursion really isn't an algorithm. It's more of a concept.
// Recursion is when something is defined within itself.
// A recursive function, for example is a function that calls itself.

const recursive = () => {
	recursive()
}

// recursive as the name suggests is a recursive function because it's going to call itself.
// Recursion is useful for tasks with repeated tasks to do.
// Recursion is important because it's used in searching and sorting algorithms.

// stack overflow
// Recursion has two main problems. Could be initially hard to grasp

// Stack overflow
// A stack overflow occurs when the call stack is overloaded
// The recursive function adds data to the stack as the function is being called. Since this runs infinitely as the function will continue calling itself till the memory allocated for the stack is exceeded and a stack overflow occurs

// Stack overflows are one of the biggest problems with recursion

// The computer needs to allocate memeory to remember the function being called.