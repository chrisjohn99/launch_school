//input: array
//output: array with first element of original array moved to end
//rules: return undefined if input is not array

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let newArr = arr.slice();

  newArr.push(newArr.shift());

  return newArr;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
console.log("first", array); // [1, 2, 3, 4]
