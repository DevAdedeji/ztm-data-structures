// We seacrh a lot on computers
// Linear Search
// Binary Search
// Depth First Search
// Breadth first search

// Linear or sequential finds a target value within a list.
// Sequentially checks each element in the list until a match is found.

const carsBrands = ['Mercedes Benz', 'Toyota', 'Audi', 'BMW', 'Ford'];

carsBrands.indexOf('Toyota')
// Uses Linear search to try and find the item.
// Returns 1. The index.

carsBrands.findIndex(item => item === 'Audi')
// Uses Linear search
// Returns 2. The index.

carsBrands.find(item => item === 'Mercedes Benz')
// Also uses Linear Search
// Returns 'Mercedes Benz'

carsBrands.includes('BMW')
// Returns true

// When data sets are search, then linear time won't work. That will take more time.