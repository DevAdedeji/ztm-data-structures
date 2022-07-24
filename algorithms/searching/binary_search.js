// In a sorted list, there's a better way to search data

const numbers = [1, 6, 8, 10, 15, 40, 65];

// I'm looking for 40 in this sorted array. I dont want to look through every element one by one (Linear Search)

// Binary search can be used in this scenario since the list is sorted.

// Choose a middle point
// 10 is in the middle. Is it higher or lower than 40?
// iT'S lower. Discard All the items before/to the left of it.

// Set the pointer to the middle index?
// cHOSE THE medium index again... repeat until the element is found.

// This is basically a tree.

// Storing data in a tree as opposed to arrays is more efficient

// Split a list of a sorted item. Detrming if the item being searched for is on the left or the right of the tree.