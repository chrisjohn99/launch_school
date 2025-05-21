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

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
