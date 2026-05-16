/* Write a function that returns the intersection of two arrays. The intersec-
tion is a third array that contains all values contained within the first two
arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
Your function should have a complexity of O(N). (If your programming
language has a built-in way of doing this, don’t use it. The idea is to build
the algorithm yourself.) */
const arrayIntersection = (array1, array2) => {
    let arrayIntersection = [];
    let largerArray = [];
    let smallerArray = [];
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

    for (const value of smallerArray) {
        if(hashTable[value]) {
            arrayIntersection.push(value);
        }
    }
    
    return arrayIntersection;
}

// --- Tests ---
const array1 = [1, 2, 3, 4, 5];
const array2 = [0, 2, 4, 6, 8];

console.log(arrayIntersection(array1, array2)); // Returns [2, 4]