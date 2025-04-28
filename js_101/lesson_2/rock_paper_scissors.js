const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

let score = { player: 0, computer: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(choice, computerChoice) {
  if (
    (choice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    return "player";
  } else if (choice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function displayWinner(choice, computerChoice, outcome) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (outcome === "player") {
    prompt("Player wins!");
  } else if (outcome === "computer") {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

function resetScore() {
  score = { player: 0, computer: 0 };
}

function interpretShortenedInput(choice) {
  switch (choice) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "sc":
      return "scissors";
    case "l":
      return "lizard";
    case "sp":
      return "spock";
    default:
      return choice;
  }
}

function incrementScore(outcome) {
  if (outcome === "player") {
    score.player += 1;
  } else if (outcome === "computer") {
    score.computer += 1;
  }
}

function displayGrandMaster() {
  if (score.player === 3) {
    prompt("Player is the grand master!");
    resetScore();
  }
  if (score.computer === 3) {
    prompt("Computer is the grand master!");
    resetScore();
  }
}

let playRPS = "y";

do {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);

  let choice = readline.question();

  while (![...VALID_CHOICES, "r", "p", "sc", "l", "sp"].includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  choice = interpretShortenedInput(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let outcome = determineWinner(choice, computerChoice);

  incrementScore(outcome);

  displayWinner(choice, computerChoice, outcome);

  displayGrandMaster();

  prompt("Do you want to play again (y/n)?");
  playRPS = readline.question().toLowerCase();

  while (playRPS[0] !== "n" && playRPS[0] !== "y") {
    prompt('Please enter "y" or "n".');
    playRPS = readline.question().toLowerCase();
  }
} while (playRPS[0] === "y");
