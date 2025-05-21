function letterPercentages(str) {
  let obj = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;

  str.split("").forEach((el) => {
    if (/[a-zA-Z]/.test(el)) {
      el === el.toUpperCase() ? (uppercaseCount += 1) : (lowercaseCount += 1);
    } else {
      neitherCount += 1;
    }
  });

  let sum = lowercaseCount + uppercaseCount + neitherCount;
  if (lowercaseCount / sum) {
    obj.lowercase = ((lowercaseCount / sum) * 100).toFixed(2);
  }
  if (uppercaseCount / sum) {
    obj.uppercase = ((uppercaseCount / sum) * 100).toFixed(2);
  }
  if (neitherCount / sum) {
    obj.neither = ((neitherCount / sum) * 100).toFixed(2);
  }
  return obj;
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
