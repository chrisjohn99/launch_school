function doubleConsonants(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[bcdfghjklmnpqrstvwxyz]/i)) {
      newStr += str[i] + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

doubleConsonants("String"); // "SSttrrinngg"
doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); // "JJullyy 4tthh"
doubleConsonants(""); // ""
