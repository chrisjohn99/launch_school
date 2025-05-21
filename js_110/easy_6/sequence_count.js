function sequence(count, startNum) {
  let newArr = [];
  for (let i = 1; i <= count; i++) {
    newArr.push(startNum * i);
  }
  return newArr;
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
