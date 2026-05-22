/* Use recursion to write a function that accepts an array of numbers and
returns a new array containing just the even numbers */

const evenNumbers = (arr) => {
  // Base case
  if (arr.length == 0) {
    return [];
  }

  if (arr[0] % 2 == 0) {
    return [arr[0], ...evenNumbers(arr.slice(1))];
  } else {
    return evenNumbers(arr.slice(1));
  }
};

// --- Tests ---
const arr = [1, 2, 3, 4, 5];
console.log(evenNumbers(arr));
