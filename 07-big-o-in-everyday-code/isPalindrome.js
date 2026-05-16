/**
 * IS PALINDROME (String)
 * Chapter: 7 — Big O in Everyday Code
 * Big O: O(N/2) → O(N) time | O(1) space
 *
 * Problem: Determine whether a string reads the same forwards and backwards.
 * Approach: Use two pointers starting at opposite ends, walking inward.
 *           If any pair of characters don't match, it's not a palindrome.
 *           Stop once the pointers meet in the middle — no need to go further.
 */

const isPalindrome = string => {

    // Start the leftIndex at index 0
    let leftIndex = 0;

    // Start rightIndex at last index of the array
    let rightIndex = string.length - 1;

    // Iterate until leftIndex reaches the middle of the array
    while (leftIndex < string.length /2 ) {

        // If the character on the left doesn't equal the character
        // on the right, the string is not a palindrome
        if (string[leftIndex] !== string[rightIndex]) {
            return false;
        }

        // Move leftIndex one to the right:
        leftIndex++;

        // Move rightIndex one to the left:
        rightIndex--;
    }

    return true;
}

//--- Tests ---
const result = isPalindrome('kayak');
console.log(result); // Returns true