function isPalindrome(str) {
  let start = "";
  let end = "";
  if (str.length % 2 === 0) {
    start = str.slice(0, str.length / 2);
    end = str.slice(str.length / 2);
  } else {
    start = str.slice(0, (str.length + 1) / 2);
    end = str.slice((str.length - 1) / 2);
  }

  let reversedEnd = end.split("").reverse().join("");
  console.log(start, reversedEnd);
  return start === reversedEnd;
}

console.log(isPalindrome("dd")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true