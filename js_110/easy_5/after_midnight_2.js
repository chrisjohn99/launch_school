function afterMidnight(timeString) {
  let minutes =
    Number(timeString.slice(0, 2)) * 60 + Number(timeString.slice(3, 5));
  return minutes % 1440 === 0 ? 0 : minutes;
}

function beforeMidnight(timeString) {
  let minutes = 0;

  minutes +=
    Number(timeString.slice(0, 2)) &&
    (24 - Number(timeString.slice(0, 2))) * 60;

  minutes +=
    Number(timeString.slice(3, 5)) && 60 - Number(timeString.slice(3, 5));

  return minutes % 1440 === 0 ? 0 : minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
