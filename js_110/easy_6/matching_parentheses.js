function isBalanced(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      counter += 1;
    }
    if (str[i] === ")") {
      counter -= 1;
    }
    if (counter < 0) {
      return false;
    }
  }

  return !counter;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
