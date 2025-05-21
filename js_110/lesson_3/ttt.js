// Display the initial empty 3x3 board.
// Ask the user to mark a square.
// Computer marks a square.
// Display the updated board state.
// If it's a winning board, display the winner.
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!

const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const FIRST_PLAYER_MARKER = "X";
const SECOND_PLAYER_MARKER = "O";

const VALID_FIRST_MOVER = ["player", "computer", "random"];

const SCORES_TO_WIN_MATCH = 5;

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function prompt(str) {
  console.log(`===> ${str}`);
}

function displayBoard(board) {
  console.clear();

  console.log(
    `You are ${FIRST_PLAYER_MARKER}. Computer is ${SECOND_PLAYER_MARKER}`
  );

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = FIRST_PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  if (emptySquares(board).find((square) => square === "5")) {
    board["5"] = SECOND_PLAYER_MARKER;
  } else if (identifyPriorityMove(board, SECOND_PLAYER_MARKER)) {
    board[identifyPriorityMove(board, SECOND_PLAYER_MARKER)] =
      SECOND_PLAYER_MARKER;
  } else if (identifyPriorityMove(board, FIRST_PLAYER_MARKER)) {
    board[identifyPriorityMove(board, FIRST_PLAYER_MARKER)] =
      SECOND_PLAYER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = SECOND_PLAYER_MARKER;
  }
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === FIRST_PLAYER_MARKER &&
      board[sq2] === FIRST_PLAYER_MARKER &&
      board[sq3] === FIRST_PLAYER_MARKER
    ) {
      return "player";
    } else if (
      board[sq1] === SECOND_PLAYER_MARKER &&
      board[sq2] === SECOND_PLAYER_MARKER &&
      board[sq3] === SECOND_PLAYER_MARKER
    ) {
      return "computer";
    }
  }

  return null;
}

function identifyPriorityMove(board, player) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === player && board[sq2] === player && board[sq3] === " ")
      return sq3;
    if (board[sq1] === " " && board[sq2] === player && board[sq3] === player)
      return sq1;
    if (board[sq1] === player && board[sq2] === " " && board[sq3] === player)
      return sq2;
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function joinOr(arr, delimiter = ", ", connectiveWord = "or") {
  let length = arr.length;

  if (length === 0) {
    return "";
  } else if (length === 1) {
    return String(arr[0]);
  } else if (length === 2) {
    return `${arr[0]} ${connectiveWord} ${arr[1]}`;
  } else {
    let str = "";
    for (let i = 0; i < length - 1; i += 1) {
      str += arr[i] + delimiter;
    }
    str += connectiveWord + " " + arr[length - 1];
    return str;
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === "player" ? "computer" : "player";
}

function chooseSquare(board, currentPlayer) {
  currentPlayer === "player"
    ? playerChoosesSquare(board)
    : computerChoosesSquare(board);
}

while (true) {
  let scores = { player: 0, computer: 0 };

  prompt(`Choose who will play first: ${joinOr(VALID_FIRST_MOVER)}`);
  let currentPlayer = readline.question().toLowerCase();

  while (!VALID_FIRST_MOVER.includes(currentPlayer)) {
    prompt(
      `Invalid entry. Choose who will play first: ${joinOr(VALID_FIRST_MOVER)}`
    );
    currentPlayer = readline.question().toLowerCase();
  }

  if (currentPlayer === "random") {
    currentPlayer = VALID_FIRST_MOVER[Math.round(Math.random())];
  }

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }
    displayBoard(board);

    if (someoneWon(board)) {
      const winner = detectWinner(board);
      scores[winner] += 1;
      prompt(`${winner.charAt(0).toUpperCase() + winner.slice(1)} won!`);
      prompt(`Scores: Player ${scores.player} | Computer ${scores.computer}`);
      if (
        scores.player === SCORES_TO_WIN_MATCH ||
        scores.computer === SCORES_TO_WIN_MATCH
      )
        break;
    } else {
      prompt("It's a tie!");
      prompt(`Scores: Player ${scores.player} | Computer ${scores.computer}`);
    }

    prompt("Play again? (y or n)");
    let answer = readline.question().toLowerCase();
    while (!["y", "n", "Y", "N"].includes(answer)) {
      prompt("Invalid entry. Play again? (y or n)");
      answer = readline.question().toLowerCase();
    }
    if (answer !== "y") break;
  }

  const winner = Object.keys(scores).find(
    (key) => scores[key] === SCORES_TO_WIN_MATCH
  );
  if (winner) {
    prompt(
      `${winner.charAt(0).toUpperCase() + winner.slice(1)} won the match!`
    );
  }
  break;
}

prompt("Thanks for playing Tic Tac Toe!");
