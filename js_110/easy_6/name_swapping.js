function swapName(str) {
  return str.split(" ").reverse().join(", ");
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
