/* Write a function that accepts a string that contains all the letters of the
alphabet except one and returns the missing letter. For example, the string,
"the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
except the letter, "f". The function should have a time complexity of O(N) */
const missingLetter = string => {
    
    // Store all encountered letters in hash table:
    let hashTable = {};
    for(let i = 0; i < string.length; i++) {
        hashTable[string[i]] = true;
    }

    // Report first unseen letter:
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < alphabet.length; i++) {
        if(!hashTable[alphabet[i]]) {
            return alphabet[i];
        }
    }
}

// --- Tests ---
const string = "the quick brown box jumps over a lazy dog";
console.log(missingLetter(string)); // Returns "f"