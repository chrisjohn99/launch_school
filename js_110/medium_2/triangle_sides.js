function triangle(...angles) {
  angles.sort((a, b) => a - b);
  if (angles.includes(0) || angles[0] + angles[1] <= angles[2])
    return "invalid";
  if (angles[0] === angles[1] && angles[1] === angles[2]) {
    return "equilateral";
  } else if (angles[0] === angles[1] || angles[1] === angles[2]) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
