/**
 * HAS DUPLICATE VALUE (Unordered Array)
 * Chapter: 4 — Speeding Up Your Code With Big O
 * Big O: O(N) time | O(N) space
 *
 * Problem: Determine whether an array contains any duplicate values.
 * Approach: Track seen values in a secondary array used as a hash.
 *           Each value becomes an index — if that index is already
 *           marked, a duplicate is found. Trades space for speed.
 */

const hasDuplicateValue = array => {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true
        } else {
            existingNumbers[array[i]] = 1;
        }
    }

    return false;
}

//--- Tests ---
const result = hasDuplicateValue([1, 2, 5, 2, 9]);
console.log(result); // Returns true;
