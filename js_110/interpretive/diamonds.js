function diamond(number) {
  for (let i = 1; i <= number; i++) {
    let starsPerLevel = number - 2 * Math.abs(i - Math.ceil(number / 2));
    console.log(
      " ".repeat((number - starsPerLevel) / 2) +
        "*".repeat(starsPerLevel) +
        " ".repeat((number - starsPerLevel) / 2)
    );
  }
}

diamond(3);
// logs
//  *
// ***
//  *
console.log("------");
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
