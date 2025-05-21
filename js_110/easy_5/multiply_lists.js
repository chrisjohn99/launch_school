function multiplyList(arr1, arr2) {
  let newArr = [];

  arr1.forEach((el, idx) => {
    newArr.push(arr1[idx] * arr2[idx]);
  });

  return newArr;
}

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
