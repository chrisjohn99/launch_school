function newStack() {
  let arr = [];
  return {
    push(item) {
      arr.push(item);
    },
    pop() {
      return arr.pop();
    },
    printStack() {
      arr.forEach((item) => console.log(item));
    },
  };
}
