function pushNonDuplicatesToArray(currentArr, newArr) {
  currentArr.forEach((arrEl) => {
    if (!newArr.includes(arrEl)) {
      newArr.push(arrEl);
    }
  });
}

function union(arr1, arr2) {
  let newArr = [];
  pushNonDuplicatesToArray(arr1, newArr);
  pushNonDuplicatesToArray(arr2, newArr);
  return newArr;
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
