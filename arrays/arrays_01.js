const strings = ['a', 'b', 'c', 'd'];
strings.push('e') //O(1) operation. Add new method to the end of the array.
strings.pop() //Remove last item from the array. Time complexity of O(1).

strings.unshift('x') //O(n). Adds element to the start of the array. Loops through everything and reassign indices, that's why time complexity is O(n)

strings.splice(2, 0, 'hi!') //Removes everything from the given index and adds a new element if specified. O(n/2) in this case. But assuming worst case in big O, we do O(n).
console.log(strings)
