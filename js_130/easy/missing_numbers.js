function missing(arr) {
  let newArr = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

let p = console.log;

p(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4])); // []
p(missing([1, 5])); // [2, 3, 4]
p(missing([6])); // []
