function interleave(...arrs) {
  let newArr = [];
  let totalLength = arrs[0].length + arrs[1].length;

  for (let i = 0; i < totalLength; i++) {
    newArr.push(arrs[i % 2].shift());
  }
  return newArr;
}

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
