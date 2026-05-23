const fib = (n, memo = {}) => {
  // Base cases
  if (n == 0 || n == 1) return n;

  // If we've already calculated this value, return it from the hash table
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Calculate the value, then store it in our memo and return it
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

// --- Tests ---
console.log(fib(10)); // Returns 55
