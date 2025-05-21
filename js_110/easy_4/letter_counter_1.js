function wordSizes(str) {
  if (str === "") return {};
  let obj = {};
  str
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

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}
