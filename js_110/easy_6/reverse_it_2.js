function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
