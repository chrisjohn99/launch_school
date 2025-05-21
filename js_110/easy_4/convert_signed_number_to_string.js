const StringNumberMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function integerToString(int) {
  if (int === 0) return "0";
  let str = "";
  while (int > 0) {
    let remainder = int % 10;
    let remainderString = Object.keys(StringNumberMap).find(
      (key) => StringNumberMap[key] === remainder
    );

    str = remainderString + str;
    int -= remainder;
    int /= 10;
  }
  return str;
}

function signedIntegerToString(int) {
  if (int === 0) return "0";
  if (Math.sign(int) === 1) {
    return "+" + integerToString(int);
  } else {
    return "-" + integerToString(int * -1);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
