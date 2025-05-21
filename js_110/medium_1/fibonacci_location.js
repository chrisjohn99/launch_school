function findFibonacciIndexByLength(length) {
  let numArray = [1n, 1n];
  while (String(numArray[numArray.length-1]).length < length) {
    numArray.push(
      numArray[numArray.length - 1] + numArray[numArray.length - 2]
    );
  }
  return BigInt(numArray.length);
}

findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
