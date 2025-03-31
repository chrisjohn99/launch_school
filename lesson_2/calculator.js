const readline = require("readline-sync");
const MESSAGE = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function calculatorFlow(languageSelection) {
  // Ask the user for the first number.
  prompt(MESSAGE[languageSelection].firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE[languageSelection].invalidNumber);
    number1 = readline.question();
  }

  prompt(number1);

  // Ask the user for the second number.
  prompt(MESSAGE[languageSelection].secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE[languageSelection].invalidNumber);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(MESSAGE[languageSelection].operation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGE[languageSelection].invalidOperation);
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case "1":
      // '1' represents addition
      output = Number(number1) + Number(number2);
      break;
    case "2":
      // '2' represents subtraction
      output = Number(number1) - Number(number2);
      break;
    case "3":
      // 3 represents multiplication
      output = Number(number1) * Number(number2);
      break;
    case "4":
      // 4 represents division
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  prompt(`${MESSAGE[languageSelection].result} ${output}`);
}

prompt(MESSAGE.en.welcome);
languageSelection = readline.question();
while (!["en", "zh"].includes(languageSelection)) {
  prompt(MESSAGE.en.invalidLanguage);
  languageSelection = readline.question();
}

const LANGUAGE = languageSelection;

let newCalculation = "y";

do {
  calculatorFlow(languageSelection);
  prompt(MESSAGE[languageSelection].newCalculation);
  newCalculation = readline.question();
  while (!["y", "n"].includes(newCalculation)) {
    prompt(MESSAGE[languageSelection].invalidNewCalculation);
    newCalculation = readline.question();
  }
} while (newCalculation === "y");
