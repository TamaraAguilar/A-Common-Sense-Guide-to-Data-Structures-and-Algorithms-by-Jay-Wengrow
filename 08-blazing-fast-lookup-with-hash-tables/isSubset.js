/**
 * IS SUBSET (Two Arrays)
 * Chapter: 8 — Blazing Fast Lookup with Hash Tables
 * Big O: O(N + M) time | O(N) space
 *
 * Problem: Determine whether all elements of one array exist within another.
 * Approach: Load the larger array into a hash table for O(1) lookups, then
 *           check each element of the smaller array against it. Avoids the
 *           O(N * M) cost of a nested loop approach.
 */

const isSubset = (array1, array2) => {
    let largerArray;
    let smallerArray;
    let hashTable = {};

    // Determine which array is smaller
    if (array1.length > array2.length) {
        largerArray = array1;
        smallerArray = array2;
    } else {
        largerArray = array2;
        smallerArray = array1;
    }

    // Store all items from largerArray inside hashTable
    for (const value of largerArray) {
        hashTable[value] = true;
    }

    // Iterate through each item in smallerArray and return false
    // if we encounter an item not inside hashTable
    for (const value of smallerArray) {
        if(!hashTable[value]) { return false; }
    }

    // If we got this far in our code without returning false
    // it means that all the items in the smallerArray
    // must be contained within largerArray
    return true;

}

//--- Tests ---
const array1 = ["a", "b", "c", "d", "e", "f"];
const array2 = ["b", "d", "f"];

console.log(isSubset(array1, array2)); // Returns true