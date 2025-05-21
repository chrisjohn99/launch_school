function multiplicativeAverage(arr) {
  let product = 1;
  arr.forEach((el) => (product *= el));
  return (product / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
