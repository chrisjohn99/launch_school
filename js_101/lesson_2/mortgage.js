const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Enter the loan amount");
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt("Please enter a number");
  loanAmount = readline.question();
}

prompt(loanAmount);

prompt("Enter the APR (please enter as a percentage value)");

let aprPercentage = readline.question().replace("%", "");

let aprDecimal = aprPercentage / 100;

prompt(aprPercentage);

prompt("Enter the loan duration (in years)");

let loanDuration = readline.question();

while (invalidNumber(loanDuration)) {
  prompt("Please enter a number");
  loanDuration = readline.question();
}

prompt(loanDuration);

let monthlyInterestRate = aprDecimal / 12;

let loanDurationInMonths = loanDuration * 12;

let monthlyPayment =
  loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
