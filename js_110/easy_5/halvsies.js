function halvsies(arr) {
  let nestedArr = [[], []];

  arr.forEach((el, idx) => {
    let destIndex = idx >= arr.length / 2 ? 1 : 0;
    nestedArr[destIndex].push(el);
  });

  return nestedArr;
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
