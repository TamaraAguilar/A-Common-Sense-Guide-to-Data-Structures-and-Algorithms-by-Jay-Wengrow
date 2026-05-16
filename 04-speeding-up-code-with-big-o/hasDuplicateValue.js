/**
 * HAS DUPLICATE VALUE (Unordered Array)
 * Chapter: 4 — Speeding Up Your Code With Big O
 * Big O: O(N^2) time | O(1) space
 *
 * Problem: Determine whether an array contains any duplicate values.
 * Approach: Compare every element against every other element using
 *           nested loops. If any two different indices hold the same
 *           value, a duplicate exists. Skips self-comparison with i !== j.
 */

const hasDuplicateValue = array => {
    let steps = 0; // count of steps
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            steps++;
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    console.log(steps); // Returns 16
    return false;
}

//--- Tests ---
const result = hasDuplicateValue([1, 4, 5, 2, 9]);
console.log(result); // Returns false;
