function swap(str) {
  return str
    .split(" ")
    .map((str) => {
      if (str.length === 1) return str;
      return str[str.length - 1] + str.slice(1, -1) + str[0];
    })
    .join(" ");
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
