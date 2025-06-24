let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(
      `  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`
    );
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(
      `  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`
    );
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter((key) => this.squares[key].isUnused());
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter((key) => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    //console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"], // top row of board
    ["4", "5", "6"], // center row of board
    ["7", "8", "9"], // bottom row of board
    ["1", "4", "7"], // left column of board
    ["2", "5", "8"], // middle column of board
    ["3", "6", "9"], // right column of board
    ["1", "5", "9"], // diagonal: top-left to bottom-right
    ["3", "5", "7"], // diagonal: bottom-left to top-right
  ];

  static joinOr(arr, delimiter = ", ", connectiveWord = "or") {
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

  static identifyPriorityMove(board, player) {
    for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
      let [sq1, sq2, sq3] = TTTGame.POSSIBLE_WINNING_ROWS[line];

      if (
        board[sq1].marker === player &&
        board[sq2].marker === player &&
        board[sq3].marker === " "
      )
        return sq3;
      if (
        board[sq1].marker === " " &&
        board[sq2].marker === player &&
        board[sq3].marker === player
      )
        return sq1;
      if (
        board[sq1].marker === player &&
        board[sq2].marker === " " &&
        board[sq3].marker === player
      )
        return sq2;
    }
    return null;
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    if (validChoices.find((square) => square === "5")) {
      choice = "5";
    } else if (
      TTTGame.identifyPriorityMove(
        this.board.squares,
        this.computer.getMarker()
      )
    ) {
      choice = TTTGame.identifyPriorityMove(
        this.board.squares,
        this.computer.getMarker()
      );
    } else if (
      TTTGame.identifyPriorityMove(this.board.squares, this.human.getMarker())
    ) {
      choice = TTTGame.identifyPriorityMove(
        this.board.squares,
        this.human.getMarker()
      );
    } else {
      do {
        choice = Math.floor(9 * Math.random() + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some((row) => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

class TTTSet {
  start() {
    this.displayWelcomeMessage();

    while (true) {
      let game = new TTTGame();
      game.play();
      console.log("Play again? (y or n)");
      let answer = readline.question().toLowerCase();
      while (!["y", "n", "Y", "N"].includes(answer)) {
        prompt("Invalid entry. Play again? (y or n)");
        answer = readline.question().toLowerCase();
      }
      if (answer !== "y") break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  }
  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }
}

let set = new TTTSet();
set.start();
