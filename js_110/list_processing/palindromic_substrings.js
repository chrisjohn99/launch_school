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

function palindromes(str) {
  return substrings(str).filter((str) => {
    if (str.length === 1) return false;
    let arr = str.split("");
    if (arr.slice().join("") === arr.slice().reverse().join("")) {
      return true;
    }
  });
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
