function star(number) {
  // for (let i = 1; i <= number; i++) {
  //   let starsPerLevel = number - 2 * Math.abs(i - Math.ceil(number / 2));
  //   console.log(
  //     " ".repeat((number - starsPerLevel) / 2) +
  //       "*".repeat(starsPerLevel) +
  //       " ".repeat((number - starsPerLevel) / 2)
  //   );
  // }
  for (let i = 0; i < (number - 7) / 2; i++) {
    console.log(
      " ".repeat((number - 7) / 2 - (2-i)) +
        "*" +
        "  " +
        " ".repeat((number - 7) / 2) +
        "*" +
        " ".repeat((number - 7) / 2) +
        "  " +
        "*" +
        " ".repeat((number - 7) / 2 - 1)
    );
  }

  console.log(
    " ".repeat((number - 6) / 2) +
      "*" +
      "  " +
      "*" +
      "  " +
      "*" +
      " ".repeat((number - 6) / 2)
  );
  console.log(
    " ".repeat((number - 4) / 2) +
      "*" +
      " " +
      "*" +
      " " +
      "*" +
      " ".repeat((number - 4) / 2)
  );
  console.log(
    " ".repeat((number - 3) / 2) + "*".repeat(3) + " ".repeat((number - 3) / 2)
  );
  console.log("*".repeat(number));
  console.log(
    " ".repeat((number - 3) / 2) + "*".repeat(3) + " ".repeat((number - 3) / 2)
  );
  console.log(
    " ".repeat((number - 4) / 2) +
      "*" +
      " " +
      "*" +
      " " +
      "*" +
      " ".repeat((number - 4) / 2)
  );
  console.log(
    " ".repeat((number - 6) / 2) +
      "*" +
      "  " +
      "*" +
      "  " +
      "*" +
      " ".repeat((number - 6) / 2)
  );
  for (let i = 0; i < (number - 7) / 2; i++) {
    console.log(
      " ".repeat((number - 7) / 2 - 1 - i) +
        "*" +
        "  " +
        " ".repeat((number - 7) / 2 - 1 + i) +
        "*" +
        " ".repeat((number - 7) / 2 - 1 + i) +
        "  " +
        "*" +
        " ".repeat((number - 7) / 2 - i)
    );
  }
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log("-----");
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

console.log("-----");
star(11);
