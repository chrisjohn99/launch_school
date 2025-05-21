function sumSquareDifference(number) {
  let sum = 0;
  let squareSum = 0;
  while (number > 0) {
    sum += number;
    squareSum += number ** 2;
    number -= 1;
  }
  return sum ** 2 - squareSum;
}

sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
