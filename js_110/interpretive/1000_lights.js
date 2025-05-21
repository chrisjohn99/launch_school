// function lightsOn(switches) {
//   let arr = [];
//   let num = 1;
//   do {
//     arr.push(num**2)
//     num += 1
//   } while (arr[arr.length - 1] < switches);
//   return console.log(arr);
// }

//1: turn all lights on
//2: 

function lightsOn(count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= count; i++) {
    arr = arr.map((number, idx) => {
      if ((idx + 1) % i === 0) {
        if (number === -1) {
          return idx + 1
        } else {
          return -1
        }
      } else {
        return number
      }
    });
  }
  return arr.filter(el => el !== -1);
}

lightsOn(5); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
