function staggeredCase(str) {
  let upperCase = true;
  return str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        if (upperCase) {
          upperCase = !upperCase;
          return char.toUpperCase();
        } else {
          upperCase = !upperCase;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
