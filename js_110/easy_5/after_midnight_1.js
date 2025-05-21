function timeOfDay(numberOfMinutes) {
  if (numberOfMinutes < 0) {
    const hours =
      Math.abs(numberOfMinutes) >= 60
        ? format(String(23 - (numberOfMinutes / 60).toFixed() % 24))
        : "00";

    const minutes = format(String(60 + numberOfMinutes % 60));
    return `${hours}:${minutes}`;
  }
  const hours =
    numberOfMinutes >= 60
      ? format(String((numberOfMinutes / 60).toFixed() % 24))
      : "00";

  const minutes = format(String(numberOfMinutes % 60));
  return `${hours}:${minutes}`;
}

function format(string) {
  if (string === "0") {
    return "00";
  } else if (string.length === 1) {
    return "0" + string;
  }
  return string;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
