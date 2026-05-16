/**
 * INSERTION SORT (Unordered Array)
 * Chapter: 6 — Optimizing for Optimistic Scenarios
 * Big O: O(N^2) time | O(1) space
 *
 * Problem: Sort an unordered array in ascending order.
 * Approach: Pick each element and shift all larger values one step right
 *           to open a gap, then insert the picked value into that gap.
 *           Builds a sorted left portion one element at a time.
 */
const insertionSort = array => {
    for (let i=1; i < array.length; i++) {
        let tempVal = array[i];
        let position = i - 1; // Will start at the left of the index of the tempVal. Represents each value with compare agains temp.

        while(position >= 0) {
            if (array[position] > tempVal) {
                array[position + 1] = array[position];
                position = position - 1
            } else {
                break;
            }
        }
        array[position + 1] = tempVal;
    }

    return array;
}

const result = insertionSort([4, 2, 7, 1, 3]);
console.log(result); // Returns 1, 2, 3, 4, 7
