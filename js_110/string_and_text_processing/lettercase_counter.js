function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/)) {
      str[i] === str[i].toLowerCase()
        ? (result.lowercase += 1)
        : (result.uppercase += 1);
    } else {
      result.neither += 1;
    }
  }
  return result;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
