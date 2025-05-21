function removeVowels(arr) {
  return arr.map((str) =>
    str.split("").filter((letter) => !"aeiou".includes(letter.toLowerCase())).join('')
  );
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
