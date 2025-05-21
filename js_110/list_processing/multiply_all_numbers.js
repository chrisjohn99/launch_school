function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      newArr.push(num1 * num2);
    });
  });

  return newArr.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
