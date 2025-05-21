function leadingSubstrings(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(0, i + 1));
  }
  return arr;
}

function substrings(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(...leadingSubstrings(str.slice(i)));
  }
  return arr;
}

substrings("abcde");

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
