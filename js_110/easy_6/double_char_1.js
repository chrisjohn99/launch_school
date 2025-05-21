function repeater(str) {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i]
  }
  return newStr;
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
