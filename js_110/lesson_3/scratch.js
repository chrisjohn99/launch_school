// You will be given a number and you will need to return it as a string in expanded form. For example:

// expanded_form(12); # Should return '10 + 2'
// expanded_form(42); # Should return '40 + 2'
// expanded_form(70304); # Should return '70000 + 300 + 4'

// Note: All numbers will be whole numbers greater than 0.

// p expanded_form(12) == '10 + 2'
// p expanded_form(42) == '40 + 2'
// p expanded_form(70304) == '70000 + 300 + 4'

// print(expanded_form(12) == '10 + 2')
// print(expanded_form(42) == '40 + 2')
// print(expanded_form(70304) == '70000 + 300 + 4')

// console.log(expanded_form(12) == "10 + 2");
// console.log(expanded_form(42) == "40 + 2");
// console.log(expanded_form(70304) == "70000 + 300 + 4");

// input: number
// output: string, expanded form of number

// explicit: any?
// implicit:

// data structure: string

// algorithm
//  find remainder of 10, subtract from number and add to end of string
// repeat until no numbers left

// function expanded_form(number) {
//   let str = "";
//   let length = String(number).length;
//   for (let i = 0; i < length; i++) {
//     let remainder = number % 10;
//     number -= remainder;
//     number /= 10;

//     if (i === length - 1) {
//       str = `${remainder + "0".repeat(i)}` + str;
//     } else if (remainder !== 0) {
//       str = ` + ${remainder + "0".repeat(i)}` + str;
//     }
//   }
//   return str;
// }

