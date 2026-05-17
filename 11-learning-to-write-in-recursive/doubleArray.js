const doubleArray = (array, index = 0) => {
  // Base case
  if (index >= array.length) {
    return;
  }

  array[index] *= 2;

  // Recursive line
  doubleArray(array, index + 1);
  return array;
};

const result = doubleArray([1, 2, 3, 4, 5]);
console.log(result);
