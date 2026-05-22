/* Use recursion to write a function that accepts an array of strings and
returns the total number of characters across all the strings. For example,
if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
are 10 characters in total. */

const totalChars = (arr) => {
  // Base case
  if (arr.length == 1) {
    return arr[0].length;
  }

  return arr[0].length + totalChars(arr.slice(1)); // Returns array from index 1 onwards
};

const arr = ["ab", "c", "def", "ghij"];
console.log(totalChars(arr));
