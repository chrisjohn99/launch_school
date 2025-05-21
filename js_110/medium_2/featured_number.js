//increment number
//check if number is
//    divisible by 7
//    is odd
//    no repeat digits

function featured(number) {
  number += 1;
  if (number > 9876543201)
    return "There is no possible number that fulfills those requirements.";

  while (true) {
    if (
      isMultipleOfSeven(number) &&
      isOdd(number) &&
      hasUniqueDigits(number)
    ) {
      return number;
    } else {
      number += 1;
    }
  }
}

function isMultipleOfSeven(number) {
  return number % 7 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

function hasUniqueDigits(number) {
  let arr = String(number).split("");
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice();
    let comp = newArr.splice(i, 1);
    if (newArr.includes(comp[0])) {
      return false;
    }
  }
  return true;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
