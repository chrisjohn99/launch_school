const rlSync = require("readline-sync");

let arr = [];

const ranks = ["1st", "2nd", "3rd", "4th", "5th", "last"];
let sixthNumber = 0;

for (let rank of ranks) {
  let number = Number(rlSync.question(`Enter the ${rank} number: `));
  if (rank === "last") {
    sixthNumber = number;
  } else {
    arr.push(number);
  }
}
if (arr.includes(sixthNumber)) {
  console.log(`The number ${sixthNumber} appears in ${arr}.`);
} else {
  console.log(`The number ${sixthNumber} does not appear in ${arr}.`);
}
