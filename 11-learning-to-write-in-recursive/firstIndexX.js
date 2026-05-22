/* Use recursion to write a function that accepts a string and returns the
first index that contains the character “x.” For example, the string,
"abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple,
assume the string definitely has at least one “x.” */

const firstIndexX = (string) => {
  // Base case
  if (string[0] == "x") {
    return 0;
  } else {
    return 1 + firstIndexX(string.slice(1));
  }
};

// --- Tests ---
const string = "abcdefghijklmnopqrstuvwxyz";
console.log(firstIndexX(string)); // Returns 23
