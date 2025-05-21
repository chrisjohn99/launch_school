const NUMBER = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function wordToDigit(str) {
  return str
    .split(" ")
    .map((el) => {
      for (let i = 0; i < NUMBER.length; i++) {
        if (el.startsWith(NUMBER[i])) {
          return i + el.substring(NUMBER[i].length);
        }
      }
      return el;
    })
    .join(" ");
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
