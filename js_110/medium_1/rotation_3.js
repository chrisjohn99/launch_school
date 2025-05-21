function maxRotation(number) {
  let length = String(number).length;
  for (let i = 0; i < length; i++) {
    number = rotateRightmostDigits(number, length - i);
  }
  return number;
}

function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  let el = arr.splice(arr.length - count, 1);
  arr.push(el[0]);
  return Number(arr.join(""));
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
