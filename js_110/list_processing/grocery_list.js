function buyFruit(arr) {
  let result = [];
  arr.forEach(([fruit, quantity]) => {
    for (let i = 0; i < quantity; i++) {
      result.push(fruit);
    }
  });
  return result;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
