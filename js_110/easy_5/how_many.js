function countOccurrences(arr) {
  let obj = {};

  arr.forEach((el) => {
      obj[el] = obj[el] || 0;
      obj[el] += 1;
  });

  Object.entries(obj).forEach(([item, count]) => {
    console.log(`${item} => ${count}`);
  });
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
