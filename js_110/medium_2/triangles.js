function triangle(...angles) {
  if (
    angles.some((num) => num <= 0) ||
    angles[0] + angles[1] + angles[2] !== 180
  )
    return "invalid";
  if (angles.some((num) => num > 90)) return "obtuse";
  if (angles.some((num) => num === 90)) return "right";
  return "acute";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
