/* Let’s write a function called countX
that returns the number of “x’s” in a given string. If our function is passed
the string, "axbxcxd", it’ll return 3, since there are three instances of the character “x” */

const countX = (string) => {
  if (string.length === 0) return 0;
  // Base case
  if (string[0] === "x") {
    return 1 + countX(string.slice(1)); // Returns everything from index 1 onwards
  } else {
    return countX(string.slice(1));
  }
};

// --- Test ---
console.log(countX("axbxcxd")); // Returns 3
