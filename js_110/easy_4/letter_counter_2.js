function isLetter(char) {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
}

function wordSizes(str) {
  if (str === "") return {};
  let obj = {};
  str
    .split("")
    .filter((char) => isLetter(char) || char === " ")
    .join("")
    .split(" ")
    .map((el) => el.length)
    .forEach((number) => {
      if (obj[number]) {
        obj[number] += 1;
      } else {
        obj[number] = 1;
      }
    });
  return obj;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}
