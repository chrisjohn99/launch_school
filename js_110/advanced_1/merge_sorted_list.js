function merge(arr1, arr2) {
  let length = arr1.length + arr2.length;
  arr1 = arr1.slice()
  arr2 = arr2.slice()
  let newArr = [];
  for (let i = 0; i < length; i++) {
    if (arr2[0] === undefined) {
      newArr.push(arr1.shift());
    } else if (arr1[0] === undefined) {
      newArr.push(arr2.shift());
    } else if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return newArr;
}

merge([1, 5, 9], [2, 6, 8]); // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]); // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]); // [1, 4, 5]
merge([1, 4, 5], []); // [1, 4, 5]
