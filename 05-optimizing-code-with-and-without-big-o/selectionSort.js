/**
 * SELECTION SORT (Unordered Array)
 * Chapter: 5 — Optimizing code with and Without Big O
 * Big O: O(N^2) time | O(1) space
 *
 * Problem: Sort an unordered array in ascending order.
 * Approach: On each pass, find the lowest value in the unsorted portion
 *           and swap it into its correct position at the front.
 *           Repeat, advancing the boundary by one each time.
 */
const selectionSort = array => {
for(let i=0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j= i+1; j < array.length; j++){
        if (array[j] < array[lowestNumberIndex]) {
            lowestNumberIndex = j;
        }
    }

    if(lowestNumberIndex != i) {
        let temp = array[i];
        array[i] = array[lowestNumberIndex];
        array[lowestNumberIndex] = temp;
    }
}
return array;
}

//--- Tests ---
const result = selectionSort([4, 2, 7, 1, 3]);
console.log(result); // Returns [1, 2, 3, 4, 7]