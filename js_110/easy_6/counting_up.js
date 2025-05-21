function sequence(num) {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  
  return newArr;
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
