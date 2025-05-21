let blocks = [
  "B:O",
  "X:K",
  "D:Q",
  "C:P",
  "N:A",
  "G:T",
  "R:E",
  "F:S",
  "J:W",
  "H:U",
  "V:I",
  "L:Y",
  "Z:M",
];

function isBlockWord(word) {
  let wordArr = word.toUpperCase().split("");
  let blockWord = true;
  wordArr.slice().forEach((letter) => {
    let blockArray = blocks.find((block) => block.includes(letter)).split(":");
    let otherLetters = wordArr.slice();
    otherLetters.splice(otherLetters.indexOf(letter), 1);

    otherLetters.forEach((letter) => {
      if (blockArray.includes(letter)) {
        blockWord = false;
      }
    });
  });
  return blockWord;
}

isBlockWord("BATCH"); // true
isBlockWord("BUTCH"); // false
isBlockWord("jest"); // true
isBlockWord("BOOK"); // false
