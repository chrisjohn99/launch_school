// here's some pseudocode for a function that determines which number in a collection has the greatest value

// Given a collection of numbers.

// Iterate through the collection one by one.
//   - save the first value as the starting value.
//   - for each iteration, compare the saved value with the current value.
//   - if the current number is greater
//     - reassign the saved value as the current value
//   - otherwise, if the current value smaller or equal
//     - move to the next value in the collection

// After iterating through the collection, return the saved value.


// Keyword	Meaning
// START	start of the program
// SET	set a variable that we can use for later
// GET	retrieve input from user
// PRINT	display output to user
// READ	retrieve a value from a variable
// IF/ELSE IF/ELSE	show conditional branches in logic
// WHILE	show looping logic
// END	end of the program


// START

// # Given a collection of integers called "numbers"

// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1

// WHILE iterator <= length of numbers
//   SET currentNumber = value within numbers collection at space "iterator"
//   IF currentNumber > savedNumber
//     savedNumber = currentNumber
//   ELSE
//     do nothing

//   iterator = iterator + 1

// PRINT savedNumber

// END


// a function that returns the sum of two numbers

// casual
// accept two numbers as arguments
// add both numbers
// assign sum to a variable
// return the variable

// formal
// START
// GET number 1, number 2
// SET sum = number 1 + number 2
// RETURN sum
// END


// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// casual
// accept an array of strings as an argument
// assign an empty string to a variable
// iterate through the array of strings
  //  append current string to variable
// after iterating, return variable

// formal
// START
// GET array of strings
// SET variable = ""
// WHILE iterator <= length of array
  // SET variable = variable + current string
// RETURN variable
// EXIT


// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]

// casual
// accept array of integers
// set a variable to 0 to keep track of interation count
// set an empty array
// iterate through integers in array
  // if current iteration count is even
    // push current integer to array
  // if current interation count is odd
    // do nothing
  // add 1 to iteration count
  // move to next integer in array
// return array

// formal
// START
// GET array of integers
// SET result = []
// SET count = 0
// WHILE count < length of array of integers
  // IF count === even number
    // PUSH current integer to result array
  // ELSE
    // do nothing
  // SET count = count + 1
// RETURN result
// EXIT  

// a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

// casual
// accept string, given character as argument
// set index to 0
// set count to 0
// set result to null
// iterate through string
  // if current character is the same as the given character
    // add 1 to count
      // if count is equal to 3
        // set index to result
        // return result
  // add 1 to index
// return result

// formal
// START
// GET string, given character
// SET index = 0
// SET count = 0
// SET result = null
// FOR each character in string
  // IF current character === given charactor
    // SET count = count + 1
      // IF count === 3
        // SET result = index
        // RETURN result
  // SET index = index + 1
// RETURN result
// EXIT



// a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:
// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

// casual
// accept array of numbers 1, array of numbers 2
// set total length to length of array 1 plus the length of array 2
// set empty array
// set index to 0
// while index is less than total length
  // if index is even (or 0)
    // push number from index 0 in array 1 to array
    // shift number from array 1
  // if index is odd
    // push number from index 0 in array 2 to array
    // shift number from array 2
  // increment index by 1
// return array

// formal
// START
// GET array 1, array 2
// SET totalLength = array 1 length + array 2 length
// SET array = []
// SET index = 0
// WHILE index < totalLength
  // IF index % 2 === 0
    // PUSH array 1[0] to array
    // SHIFT array 1
  // ELSE
    // PUSH array 2[0] to array
    // SHIFT array 2
  // SET index = index + 1
// RETURN array
//EXIT