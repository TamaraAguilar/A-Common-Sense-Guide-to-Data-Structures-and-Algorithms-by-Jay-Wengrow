/**
 * BUBBLE SORT (Unordered Array)
 * Chapter: 4 — Speeding Up Your Code With Big O
 * Big O: O(N^2) time | O(1) space
 *
 * Problem: Sort an unordered array by repeatedly bubbling the largest
 *          unseen value to its correct position at the end.
 * Approach: Compare each adjacent pair and swap if out of order.
 *           Repeat until a full pass completes with no swaps.
 */

const bubble_sort = array => {
  let unsorted_until_index = array.length - 1;
  let sorted = false;
  
  while(!sorted) {
    // We prelimininarly establish sorted to be true
    // Each pass through we'll assume the array is sorted
    // until we encounter a swap
    sorted = true;
    for(let i=0; i < unsorted_until_index; i++) {
      if (array[i] > array[i + 1]) {
        // We keep a temporary variable to keep track of values
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false; // We encounter a swap
      }
    }
    // Shrink boundary after each pass
    unsorted_until_index -= 1;
  }
  
  return array; // Returns sorted array
}

//--- Tests ---
const result = bubble_sort([65, 55, 45, 35, 25, 15, 10]);
console.log(result);