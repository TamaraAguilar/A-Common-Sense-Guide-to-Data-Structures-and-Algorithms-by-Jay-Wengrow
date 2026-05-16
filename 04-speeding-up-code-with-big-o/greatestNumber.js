/**
 * GREATEST NUMBER (Unordered Array)
 * Chapter: 4 — Speeding Up Your Code With Big O
 * Big O: O(N) time | O(1) space
 *
 * Problem: Find the greatest value in an unordered array.
 * Approach: Assume the first element is the greatest, then iterate
 *           through the rest — replacing whenever a larger value is found.
 */

const greatestNumber = array => {
   let greatest = array[0]; // Assume first element is the greatest
    for(let i=1; i < array.length; i++) {
        if (array[i] > greatest) {
            greatest = array[i]; // Replace in array if greater
        }
    }
    return greatest;
}

//--- Tests ---
const result = greatestNumber([1, 5, 7, 8, 100]);
console.log(result);
