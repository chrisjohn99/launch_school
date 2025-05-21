//input: number and count (both numbers)
//output: number altered by moving digit at count to right side of number

//convert number to string
//split string
//grab element at array length - count and move to end of array
//join string
//convert to number

function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  let el = arr.splice(arr.length - count, 1);
  arr.push(el[0]);
  return Number(arr.join(""));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
