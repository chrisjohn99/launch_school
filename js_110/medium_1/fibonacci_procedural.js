function fibonacci(num) {
  if (num < 3) return 1;
  let sum = 1;
  let value = 1;

  for (let i = 2; i < num; i++) {
    sum += value;
    value = sum - value;
  }
  return sum;
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(9)); // 34
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
