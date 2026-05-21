const anagramOf = (string) => {
  // Base case: if the string is only one character
  // return an array containing just a single character string
  if (string.length === 1) {
    return [string[0]]; // Returns an array containing the first character
  }

  // Create a collection to hold all the anagrams
  let collection = [];

  // Find all the anagrams of the substring from the second character until the end.
  // For example, if the string is "abcd", the substring is "bcd",
  // so we'll find all the anagrams of "bcd"
  substringAnagrams = anagramOf(string.slice(1));

  // Iterate over each substring
  for (const substringAnagram of substringAnagrams) {
    // Insert the first character of our string into the
    // substring anagram copy. Where it will go depends
    // on the index we're up to within the loop
    // Then, take this new string and add it to our collection of anagrams:
    for (let i = 0; i < substringAnagram.length; i++) {
      const newString =
        substringAnagram.slice(0, i) + string[0] + substringAnagram.slice(i);

      collection.push(newString);
    }
  }

  return collection;
};

console.log(anagramOf("abcd"));
