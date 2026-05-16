/* Write a function that returns the first non-duplicated character in a string.
For example, the string, "minimum" has two characters that only exist
once—the "n" and the "u", so your function should return the "n", since it
occurs first. The function should have an efficiency of O(N). */
const nonDuplicateChar = string => {

    // Store all the values in a hash table
    let hashTable = {};

    for(let i=0; i < string.length; i++) {
        if (hashTable[string[i]]) {
            hashTable[string[i]]++;          
        }     
        else {
            hashTable[string[i]] = 1;    
        }
    }

    console.log(hashTable);

    for (let j=0; j < string.length; j++) {
        if(hashTable[string[j]] === 1) {
            return string[j];
        }
    }
}


// --- Tests ---
const string = "minimum";
console.log(nonDuplicateChar(string)); // Returns "n"