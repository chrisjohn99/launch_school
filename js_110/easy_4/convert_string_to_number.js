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

function stringToInteger(str) {
  let number = 0;
  for (let i = 0; i < str.length; i += 1) {
    number += StringNumberMap[str[i]] * 10 ** (str.length - (i + 1));
  }
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
