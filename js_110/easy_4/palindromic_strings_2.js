function isRealPalindrome(str) {
  let strippedDownString = str
    .toLowerCase()
    .split("")
    .filter((char) => "abcdefghijklmnopqrstuvwxyz".includes(char));
  return strippedDownString.join("") === strippedDownString.reverse().join("");
}

isRealPalindrome("madam"); // true
isRealPalindrome("Madam"); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome("356653"); // true
isRealPalindrome("356a653"); // true
isRealPalindrome("123ab321"); // false
