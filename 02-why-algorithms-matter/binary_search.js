/**
 * BINARY SEARCH (Ordered Array)
 * Chapter: 2 — Why Algorithms Matter
 * Big O: O(log N) time | O(1) space
 *
 * Problem: Search for a value in an ordered array efficiently.
 * Approach: Repeatedly halve the search space by comparing the target
 *           against the midpoint. Adjust the lower or upper bound
 *           accordingly until the value is found or the bounds cross.
 */

const binary_search = (arr, search_value) => {
  // First, we establish the lower and upper bounds of where the value
  // we're searching for can be. To start, the lower bound if the first
  // value in the array, while the upper bound is the last value:
  let lower_bound = 0;
  let upper_bound = arr.length - 1;

  // We begin a loop in which we keep inspecting the middlemost value
  // between the upper and lower bounds
  while (lower_bound <= upper_bound) {
    // We found the midpoint between the upper and lower bounds:
    let midpoint = Math.floor((lower_bound + upper_bound) / 2);
    let value_at_midpoint = arr[midpoint];

    // If the value at midpoint is the one we're looking for, we're done
    if (value_at_midpoint == search_value) {
      return midpoint;
    }
    // If not, we change the lower or upper bound based on whether we need
    // to guess higher or lower

    // If we have to guess lower, we make the upper bound the index to the
    // left of the midpoint:
    else if (value_at_midpoint > search_value) {
      upper_bound = midpoint - 1;

      // If we have to guess higher, we raise the lower bound:
    } else if (value_at_midpoint < search_value) {
      lower_bound = midpoint + 1;
    }
  }

  // If we've narrowed the bounds until they've reached each other, that
  // means that the value we're searching for is not contained within
  // this array:
  return 'Not found';
};

// --- Tests ---
console.log(binary_search([3, 17, 75, 80, 202], 22)); // Returns 'Not found'
console.log(binary_search([3, 17, 75, 80, 202], 75)); // Returns 2
