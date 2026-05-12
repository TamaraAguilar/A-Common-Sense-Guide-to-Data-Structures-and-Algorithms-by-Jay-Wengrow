/**
 * LINEAR SEARCH (Ordered Array)
 * Chapter: 2 — Why Algorithms Matter
 * Big O: O(N) time | O(1) space
 *
 * Problem: Search for a value in an ordered array.
 * Approach: Iterate through every element in the array. Return the index if found.
 *           If an element exceeds the search_value, it means it can't appear later,
 *           so we exit the loop.
 */

const linear_search = (arr, search_value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search_value) {
      // If we find the value we're looking for, we return its index
      return i;
    } else if (arr[i] > search_value) {
      // If we reach an element that is greater than the value we're looking for, we can exit the loop earlier
      return 'Not found';
    }
  }
};

// --- Tests ---
let result = linear_search([3, 17, 75, 80, 202], 22);
console.log(result); // Returns 'Not found'

result = linear_search([3, 17, 75, 80, 202], 75);
console.log(result); // Returns 2
