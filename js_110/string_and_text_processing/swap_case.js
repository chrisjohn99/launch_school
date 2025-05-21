function swapCase(str) {
  return str.split("").map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join("");
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
