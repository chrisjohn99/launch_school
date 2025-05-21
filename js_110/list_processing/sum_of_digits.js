function sum(num) {
  return num.toString().split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
